## Pitfalls

### Complexity & Pitfalls of Bundling

This section must be part of every bundling design.

#### 1. Hidden Obligations

**Risk:**
Bundling components may create unforeseen obligations or service-level requirements.

**Examples:**
- Bundling charger installation with vehicle sale creates warranty liability across both
- Combining physical product with subscription creates long-term support obligation
- Free training included in bundle becomes ongoing expectation

**Mitigation:**
- Document all obligations across all bundle components
- Validate operational capacity to deliver
- Include obligation limits in contract terms
- Train agents on scope boundaries

#### 2. Misaligned Cost/Value

**Risk:**
Bundle pricing may not reflect true cost structure or value delivery.

**Examples:**
- Discount on bundle erodes margin on high-cost components
- Low-margin products subsidize high-margin products inappropriately
- Fulfillment cost of bundle exceeds individual component delivery

**Mitigation:**
- Perform full cost analysis before bundle pricing
- Validate margin targets across all components
- Monitor actual delivery costs post-launch
- Adjust pricing or composition based on data

#### 3. Bundles That Break Automation Logic

**Risk:**
Bundle structure conflicts with Odoo/OVApp workflows or data models.

**Examples:**
- Subscription + physical product in single bundle confuses inventory tracking
- Deposit + service in bundle creates unclear refund logic
- Nested bundles exceed system hierarchy limits
- Bundle activates in wrong sequence in app

**Mitigation:**
- Test bundle in Odoo before commercial launch
- Validate OVApp workflows support bundle fulfillment
- Document system limitations
- Design bundles within known system constraints

#### 4. Customer Misunderstandings

**Risk:**
Customers don't understand what's included, leading to dissatisfaction or disputes.

**Examples:**
- Customer expects unlimited service but bundle has usage caps
- Deposit refund conditions not clearly communicated
- Warranty coverage across bundle components unclear
- Renewal terms for bundled subscriptions confusing

**Mitigation:**
- Create clear, simple bundle descriptions
- Provide itemized component list
- Document what's included vs. what's optional
- Test customer comprehension before launch
- Include bundle details in contract and confirmation

#### 5. Over-Complexity for Agents

**Risk:**
Agents struggle to explain, quote, or sell bundles effectively.

**Examples:**
- Too many bundle variations (SKU explosion)
- Unclear pricing rules or discount calculations
- Complex eligibility requirements
- Difficult to explain value proposition

**Mitigation:**
- Limit number of active bundles per segment
- Provide agent cheat sheets
- Build bundle quotation into app workflows
- Simplify eligibility rules
- Test agent comprehension during training

### Bundle Design Checklist

Before launching any bundle, validate:

- [ ] All obligations across components documented
- [ ] Cost/value alignment validated
- [ ] Odoo configuration tested
- [ ] OVApp workflows support fulfillment
- [ ] Customer-facing description created and tested
- [ ] Agent training materials prepared
- [ ] Contract terms include bundle specifics
- [ ] Refund/cancellation logic clear
- [ ] Pricing approved by finance
- [ ] Channel suitability confirmed
