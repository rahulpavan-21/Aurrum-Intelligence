"""Backend API tests for Aurrum Intelligence."""
import os
import uuid
import requests
import pytest

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://aurrum-quantum-ui.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def s():
    sess = requests.Session()
    sess.headers.update({"Content-Type": "application/json"})
    return sess


# ---------- Health ----------
def test_health(s):
    r = s.get(f"{API}/health", timeout=15)
    assert r.status_code == 200
    j = r.json()
    assert j.get("status") == "healthy"
    assert "time" in j


# ---------- Market snapshot ----------
def test_market_snapshot(s):
    r = s.get(f"{API}/market-snapshot", timeout=15)
    assert r.status_code == 200
    j = r.json()
    tickers = j.get("tickers")
    assert isinstance(tickers, list)
    assert len(tickers) >= 5
    for t in tickers:
        assert "symbol" in t and "price" in t and "change" in t


# ---------- Contact ----------
def test_contact_create_and_list(s):
    payload = {
        "name": "TEST_User",
        "email": f"test_{uuid.uuid4().hex[:8]}@example.com",
        "trading_style": "Swing",
        "message": "TEST message",
    }
    r = s.post(f"{API}/contact", json=payload, timeout=15)
    assert r.status_code == 200, r.text
    j = r.json()
    assert "id" in j and "created_at" in j
    assert j["email"] == payload["email"]
    assert j["name"] == payload["name"]

    # GET verify persistence
    r2 = s.get(f"{API}/contact", timeout=15)
    assert r2.status_code == 200
    lst = r2.json()
    assert any(item.get("email") == payload["email"] for item in lst)


def test_contact_invalid_email(s):
    r = s.post(f"{API}/contact", json={
        "name": "TEST_Bad", "email": "not-an-email", "message": "hi"
    }, timeout=15)
    assert r.status_code == 422


# ---------- Newsletter ----------
def test_subscribe_idempotent(s):
    email = f"news_{uuid.uuid4().hex[:8]}@example.com"
    r1 = s.post(f"{API}/subscribe", json={"email": email}, timeout=15)
    assert r1.status_code == 200, r1.text
    j1 = r1.json()
    assert j1["email"] == email
    id1 = j1["id"]

    r2 = s.post(f"{API}/subscribe", json={"email": email}, timeout=15)
    assert r2.status_code == 200, r2.text
    j2 = r2.json()
    assert j2["email"] == email
    # Idempotent — same id returned
    assert j2["id"] == id1
