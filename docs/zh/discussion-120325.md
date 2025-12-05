# Discussion 12-03-25

## Brainstorm Structure

### 1. Reset the Room

"Today we align commercial reality with technical implementation — short-term and long-term."

---

### 2. Two Questions to Start

**Q1 — What do we need to sell *in the next 30 days*?**

**Q2 — What is our *12–24 month* commercial model vision?**

---

### 3. Commercial Side (Plain Language Only)

* Describe real customer steps
* Describe real agent steps
* Describe real partner steps
  (No spreadsheets, no models)

---

### 4. Technology Side (Plain Language Only)

* Odoo → customer-facing logic
* ABS → asset + entitlement logic
* Odoo ↔ ABS → handshake
* DIRAC → flexible future-proofing

---

### 5. The Core Tension

**Q1: Where does functionality live? Odoo or ABS?**

**Q2: How is the current bundling design aligned with Lome setup?**

- Are the 6 bundles (B45-1/7/30, B100-1/7/30) properly defined as Product-Units?
- Does the swap count quota match the bundling framework?
- How does the deposit-based entitlement model apply to battery pool access?
- Is the energy service + swap service combination a composite Product-Unit?
- Do operational requirements (attendant accounts, payment flow, battery scan) map to our SoP templates?

---

### 6. The Consensus (One-line architecture)

"Odoo handles commercial workflow.
ABS handles smart assets.
They handshake to deliver customer satisfaction."

---

### 7. Build Alignment in Two Horizons

#### Short Term (30 days)

"What tools and workflows allow selling NOW?"

#### Long Term (12–24 months)

"What architecture supports everything we want LATER?"

---

### 8. Close With One Output

"Today we leave with:

1. short-term sales solution,
2. long-term architecture direction."

---

## Commercial Model Framework Mindmap

![Commercial Model Framework](diagrams/images/model-mindmaps.png)

---

## Togo Lome Market Setup Data

### 1. Location & Currency

- **Country**: Togo
- **City/Region**: Lome metro area
- **Local Currency**: XOF (West African CFA franc)

### 2. Subscription Variants

**Duration Options:**
- ☐ Hourly (24 Hours)
- ☐ Weekly (7 days)
- ☑ Monthly (30 days)

**Service Tiers:** Not applicable

**Client App Requirements:**
- Find the nearest station
- View subscription status
- View remaining swaps
- Swap history

### 3. Services

**Service 1: Swap Network Access**
- **Name**: 45Ah Battery Network Access, 100Ah Battery Network Access
- **Type**: Swap Network Access
- **Unit of Measure**: Number of swaps
- **Description**: Access to swap network fleet in Lome for 2-wheelers and 3-wheelers

**Service 2: Energy Service**
- **Name**: Energy Service
- **Type**: ☑ Consumption
- **Unit of Measure**: kWh
- **Description**: Battery electricity quota allocation. Allows a balance between the energy consumed and the number of swaps performed.

**Recommendation:** Combine swap and energy services into one, generating a credit that will be converted into a free swap whenever the customer wants. The scan app should read the energy level of the battery without any intervention from the swap agent (tapping battery state of charge).

### 4. Bundles

| Name | Product | Number of Swaps | Maximum Validity | Bundle Price (FCFA) |
|------|---------|-----------------|------------------|---------------------|
| B45-1 | 45Ah Battery Network Access | 1 | 24 hours | 1,200 |
| B45-7 | 45Ah Battery Network Access | 15 | 7 days | 17,250 |
| B45-30 | 45Ah Battery Network Access | 60 | 30 days | 66,000 |
| B100-1 | 100Ah Battery Network Access | 1 | 24 hours | 2,400 |
| B100-7 | 100Ah Battery Network Access | 15 | 7 days | 34,500 |
| B100-30 | 100Ah Battery Network Access | 60 | 30 days | 132,000 |

### 5. Operational Requirements

**Swap Attendant Account:**
- Each station must have its own account and credentials
- Access to: Swap history, Number of active assets (batteries, racks)

**Swap Payment:**
- **Current**: Client manually communicates payment reference
- **Recommendation**: Push message to client confirming payment; attendant receives "swap accepted/rejected" message with payment reference
- **Background Data Setup**: Store client subscriptions directly in the app

**Battery Scan:**
- Check if active subscription exists
- Display: Client name, subscription date, status (active/inactive), swaps remaining

**Battery Unlock:**
1. Manual code: Client receives payment reference and communicates to attendant
2. Automatic: Attendant receives payment reference directly on app after validation
