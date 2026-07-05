# Hotel Recommendation System: Test Plan

## Overview
This document outlines the testing strategy for the "10 Better & Cheaper Hotels" recommendation feature.

## Test Scenarios

### 1. Boundary Cases
* *Max Distance:* Verify candidate at exactly 5.0 km is included.
* *Min Distance:* Verify candidate at 0.1 km is included.
* *Price Boundary:* Verify candidate at equal price is excluded (strictly cheaper required).
* *Score Boundary:* Verify candidate at equal score is excluded (strictly better required).
* *Result Count:* Verify exactly 10 items are returned when >10 qualify.
* *Empty State:* Verify "No results" message appears when 0 qualify.

### 2. Negative Cases
* *Sold Out:* Verify inventory_available = 0 results in exclusion.
* *Out of Range:* Verify distance > 5 km results in exclusion.
* *Inactive:* Verify status = inactive results in exclusion.
* *Self-Exclusion:* Verify the selected hotel is excluded from its own recommendations.
* *Negative Prices:* Verify system handles/rejects negative price values.
* *Missing Amenities:* Verify system defaults amenity match to 0% if data is null.

### 3. Ranking & Sorting
* *ScoreDelta:* Verify results are sorted by ScoreDelta descending.
* *Price Tie-break:* Verify lower price wins on score ties.
* *Distance Tie-break:* Verify lower distance wins on score/price ties.
* *Review Count Tie-break:* Verify higher review count wins on score/price/dist ties.

### 4. Data Correctness
* *Price Math:* Validate total price equals (Nightly Rate × Nights).
* *Currency:* Verify all prices are normalized to the user's currency.
* *Stale Inventory:* Verify inventory status is validated against the live booking service.
* *Rating Limits:* Verify star ratings are constrained within the 1-5 scale.

## Clarifying Questions
1. What is the fallback sort order if all ranking criteria are identical?
2. Which exchange rate service is used for cross-currency price comparison?
3. How should the system handle missing review scores (exclude or 0)?
4. What is the maximum cache TTL for inventory status?
5. Is amenity_match_percent calculated against all or only "Key" amenities?
6. Does "Locality" use a unique ID or strictly the 5km radius?
7. How does the system handle real-time inventory depletion during search?
8. Are "Why Recommended" tags generated dynamically or selected from a static list?
