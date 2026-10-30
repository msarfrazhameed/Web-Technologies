window.onload = function () {
    console.log("Page loaded");

    // --- 1. YOUR EXISTING BANNER JS ---
    const pbt1 = document.getElementById("button-pricing");
    if (pbt1) {
        pbt1.addEventListener("click", () => {
            console.log("button clicked");
        });
    }

    const peopleSelect = document.getElementById("people-select");
    const calculatedPrice = document.getElementById("calculated-price");

    if (peopleSelect && calculatedPrice) {
        peopleSelect.addEventListener("change", (event) => {
            const selectedValue = event.target.value;
            if (selectedValue === "2") {
                calculatedPrice.innerText = "Estimated Cost: $40/week";
            } else if (selectedValue === "4") {
                calculatedPrice.innerText = "Estimated Cost: $80/week";
            }
        });
    }

    // --- 2. TASK 3: MIDTERM JAVASCRIPT (FA24-BCS-139 -> N = 39) ---
    const N = 39;
    const PREMIUM_LIMIT = N * 100; // 39 * 100 = 3900

    const productGrid = document.getElementById("product-grid");
    const searchInput = document.getElementById("search-input");
    const sortPriceBtn = document.getElementById("sort-price-btn");
    const noProductsMsg = document.getElementById("no-products-msg");
    const categoryRadios = document.querySelectorAll(".filter-radio");
    const cards = Array.from(document.querySelectorAll(".product-card"));

    // Helper function: Read numeric price directly from a card element
    function getCardPrice(card) {
        const priceEl = card.querySelector(".product-price");
        if (!priceEl) return 0;
        return parseFloat(priceEl.textContent.replace(/[^0-9.]/g, "")) || 0;
    }

    // Requirement A: Add "Premium" label on load for products costing > N * 100 (3900)
    cards.forEach((card) => {
        const price = getCardPrice(card);
        if (price > PREMIUM_LIMIT) {
            const badge = document.createElement("span");
            badge.className = "premium-badge";
            badge.textContent = "Premium";
            card.appendChild(badge);
        }
    });

    // Requirement B: Live Search working together with Task 1 Category Filter
    function filterCards() {
        const query = searchInput.value.trim().toLowerCase();
        const checkedRadio = document.querySelector(".filter-radio:checked");
        const activeCatId = checkedRadio ? checkedRadio.id : "cat-all";

        let visibleCount = 0;

        cards.forEach((card) => {
            const title = card.querySelector(".product-title").textContent.toLowerCase();
            const matchesSearch = title.includes(query);

            // Toggle .search-hidden based on search text
            if (matchesSearch) {
                card.classList.remove("search-hidden");
            } else {
                card.classList.add("search-hidden");
            }

            // Check if card also matches the CSS radio category filter
            const matchesCategory =
                activeCatId === "cat-all" || card.classList.contains(activeCatId);

            if (matchesSearch && matchesCategory) {
                visibleCount++;
            }
        });

        // Show "No products found" if 0 cards match both filters
        if (visibleCount === 0) {
            noProductsMsg.style.display = "block";
        } else {
            noProductsMsg.style.display = "none";
        }
    }

    if (searchInput) {
        searchInput.addEventListener("input", filterCards);
    }

    // Re-check "No products found" whenever the user switches category radio buttons
    categoryRadios.forEach((radio) => {
        radio.addEventListener("change", filterCards);
    });

    // Requirement C: Sort by Price Button (toggles Low->High and High->Low using appendChild)
    let sortAscending = true;

    if (sortPriceBtn && productGrid) {
        sortPriceBtn.addEventListener("click", () => {
            cards.sort((cardA, cardB) => {
                const priceA = getCardPrice(cardA);
                const priceB = getCardPrice(cardB);
                return sortAscending ? priceA - priceB : priceB - priceA;
            });

            // Move existing card DOM elements in the grid using appendChild
            cards.forEach((card) => {
                productGrid.appendChild(card);
            });

            // Update button label so it's clear in screenshots and viva
            sortPriceBtn.textContent = sortAscending
                ? "Sort by price (Low → High)"
                : "Sort by price (High → Low)";

            // Flip direction for next click
            sortAscending = !sortAscending;
        });
    }
};