# Service Product-Units

## Overview

Service Product-Units deliver ongoing value through infrastructure access or usage tracking. They are strictly categorized into two types:

- **Access-Type Services** — Grant time-bounded access to infrastructure (must have explicit duration)
- **Gage-Type Services** — Monetize usage metrics (swap count, kWh, etc.)

## Access-Type Services

**Definition:** Grant access to infrastructure or networks for a defined duration. Duration must be explicitly specified.

### Battery Swap Access – 45Ah – Weekly
- **Category:** Service Product-Unit (Access-Type)
- **Metric:** Week
- **Duration:** 7 days
- **Description:** Time-bounded access to battery swap infrastructure for 45Ah batteries
- **Prerequisites:** Active Swap Privilege – MotBat 45Ah

### Battery Swap Access – 45Ah – Monthly
- **Category:** Service Product-Unit (Access-Type)
- **Metric:** Month
- **Duration:** 30 days
- **Description:** Time-bounded access to battery swap infrastructure for 45Ah batteries
- **Prerequisites:** Active Swap Privilege – MotBat 45Ah

### Swap Network Access – City – 12 Months
- **Category:** Service Product-Unit (Access-Type)
- **Metric:** Year
- **Duration:** 12 months
- **Description:** Access to city-wide swap network for specified duration
- **Context:** Geographic coverage (city-level), station availability

### Charging Network Access – City – 12 Months
- **Category:** Service Product-Unit (Access-Type)
- **Metric:** Year
- **Duration:** 12 months
- **Description:** Access to city-wide charging network for specified duration
- **Context:** Geographic coverage (city-level), charger availability

### Asset Assignment – Vehicle – Daily
- **Category:** Service Product-Unit (Access-Type)
- **Metric:** Day
- **Duration:** 1 day (or multi-day as defined)
- **Description:** Time-bounded assignment of a specific asset (e.g., vehicle) to a user, binding the asset ITEM ID from THING (DIRAC/ARM) to the service plan
- **Context:** Non-fungible service; references concrete asset instance. Used as runtime realization of Contract PUs (WARRANTY, PRIVILAGE, RENTAL). In BSS, binds specific vehicle to swap service plan at purchase/activation.
- **Prerequisites:** Concrete asset instance available in THING, Contract PU defining entitlement scope

## Gage-Type Services

**Definition:** Monetize usage metrics. No duration field required; charged per unit of consumption.

### Battery Swap Usage – 45Ah – Per Swap
- **Category:** Service Product-Unit (Gage-Type)
- **Metric:** Count (per swap event)
- **Description:** Single battery swap transaction for 45Ah battery
- **Prerequisites:** Active Swap Privilege – MotBat 45Ah

### Battery Swap Usage – 45Ah – Pack of 50
- **Category:** Service Product-Unit (Gage-Type)
- **Metric:** Count (50 swaps)
- **Description:** Pre-purchased pack of 50 swap transactions for 45Ah battery
- **Prerequisites:** Active Swap Privilege – MotBat 45Ah

### Energy Usage – kWh
- **Category:** Service Product-Unit (Gage-Type)
- **Metric:** kWh
- **Description:** Energy consumption metered per kilowatt-hour
- **Context:** Charging infrastructure, telemetry integration

## Service Bundling Rules

**Duration Alignment Requirement:**

When bundling Access-Type services, their durations **must match**. For example:

- ✅ Valid: Battery Swap Access (7 days) + Swap Network Access (7 days)
- ❌ Invalid: Battery Swap Access (7 days) + Swap Network Access (30 days)

Gage-Type services can be bundled with any Access-Type service, as they do not have duration constraints.

## Common Attributes

**All Service Product-Units have:**

- **Service Level Agreements (SLAs)** — Response time, availability guarantees
- **Scope Definitions** — Geographic coverage, network boundaries, capacity limits
- **Context Requirements** — Valid customer account, active payment method, prerequisite contracts

## Obligations

**When selling Service Product-Units, we commit to:**

- **Performance Guarantees** — Uptime, response times, service quality standards
- **Support Availability** — Customer support channels, escalation procedures
- **Network Maintenance** — Infrastructure upkeep, station/charger operational readiness
- **Fair Usage Policies** — Capacity management, usage limits where applicable
