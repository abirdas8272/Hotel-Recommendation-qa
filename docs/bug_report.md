# Bug Report: Hotel Recommendation System

## Summary of Findings
Six critical logic and data integrity issues were identified.

| ID | Issue | Severity | Description |
|:---|:---|:---|:---|
| 01 | Constraint Violation | High | "Comet Residency" (5.8km) included (>5km limit). |
| 02 | Logic Failure | High | "Zenith Inn" (₹22,400) is more expensive than selected hotel (₹21,000). |
| 03 | Exclusion Failure | Medium | Selected hotel "Skyline" appears in results. |
| 04 | Data Integrity | Medium | Duplicate entry found for "Orbit Executive Stay". |
| 05 | Localization | Medium | Mixed currency (INR and USD) without normalization. |
| 06 | Validation | Low | "Nexus Park" rating (10.8) exceeds 10.0 scale. |

## Details
* *Bug 01 (Distance):* Candidate at 5.8 km violates the 5 km constraint.
* *Bug 02 (Price Logic):* "Zenith Inn" does not satisfy the "Cheaper than selected" rule.
* *Bug 03 (Exclusion):* Recommendation engine fails to filter out the search-originating hotel.
* *Bug 04 (Duplicates):* Same hotel ID listed twice, impacting the top 10 limit.
* *Bug 05 (Localization):* Vertex Corporate Rooms (USD) needs conversion to INR before comparison.
* *Bug 06 (Scale):* Star/Review ratings exceeding logical bounds (10.8) indicate faulty data input.
