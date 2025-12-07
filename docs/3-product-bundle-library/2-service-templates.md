## Service Templates

### Standard Bundle Template

Use this template to define any bundle:

```markdown
# Bundle: [Name]

## Bundle Classification
- **Type**: [Logical Grouping / Value Proposition / Channel-Specific / Mission]
- **Target Segment**: [Customer segment or use case]
- **Sales Channels**: [Where this bundle can be sold]

## Components

### Physical Product-Units
- [Component 1]: [Quantity]
- [Component 2]: [Quantity]

### Service Product-Units
- [Service 1]: [Duration / Terms]
- [Service 2]: [Duration / Terms]

### Deposit-Based Entitlements
- [Deposit 1]: [Amount / Terms]

### Digital/Operational Product-Units
- [Digital component 1]
- [Digital component 2]

## Value Proposition

### Customer Value
- [Benefit 1]
- [Benefit 2]
- [Economic advantage vs. individual purchase]

### Use Case Addressed
[Description of complete customer workflow or mission this bundle solves]

## Pricing

### Individual Component Pricing
- [Component 1]: [Price]
- [Component 2]: [Price]
- **Total if purchased separately**: [Sum]

### Bundle Pricing
- **Bundle Price**: [Price]
- **Customer Savings**: [Discount amount or %]
- **Bundle Margin**: [Target margin %]

## Combined Obligations

### Service Levels
- [Aggregated SLA across all components]

### Warranty Coverage
- [Physical products]: [Terms]
- [Services]: [Terms]

### Support Requirements
- [What company must deliver across all components]

## Fulfillment Workflow

### Sequence
1. [Step 1: e.g., Process payment]
2. [Step 2: e.g., Activate deposit]
3. [Step 3: e.g., Deliver physical goods]
4. [Step 4: e.g., Activate subscription]
5. [Step 5: e.g., Complete app onboarding]

### Dependencies
- [System requirements]
- [Asset availability]
- [Customer prerequisites]

### Completion Criteria
- [How we know bundle is fully delivered and active]

## System Configuration

### Odoo Setup
- Product template ID: [ID]
- Pricelist rules: [Reference]
- Subscription configuration: [Details]

### OVApp Workflow
- Agent sales flow: [Workflow name/ID]
- Customer activation flow: [Workflow name/ID]

## Contract Terms

### Inclusions
- [Explicitly listed components and services]

### Exclusions
- [What is NOT included to manage expectations]

### Renewal/Cancellation
- [Terms for ongoing services within bundle]
- [Refund policy for deposits]
- [What happens to physical components]

## Agent Guidance

### Sales Narrative
[Simple 2-3 sentence pitch agents can use]

### Eligibility
- [Customer qualifications or prerequisites]

### Common Questions
1. Q: [Question]
   A: [Answer]
2. Q: [Question]
   A: [Answer]
```

### Composite Offerings

Composite commercial offerings are modeled as **ABS bundles**, not as single Product-Units.

For bundle types, templates, and design principles, see:

- [Bundle Design](1-bundle-design.md)
