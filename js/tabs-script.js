const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains("active")) {
            tabsBtn.forEach(function (item) {
                item.classList.remove("active");
            });

            tabsItems.forEach(function (item) {
                item.classList.remove("active");
            });

            currentBtn.classList.add("active");
            currentTab.classList.add("active");
        }
    });
}
document.querySelector(".tabs__nav-btn:nth-child(2)").click();

//tabs2

const subtabBtn = document.querySelectorAll(".subtabs-nav-btn");
const subtabItem = document.querySelectorAll(".subtabs__item");

subtabBtn.forEach(onSubtabClick);

function onSubtabClick(item) {
    item.addEventListener("click", function () {
        let currentSubBtn = item;
        let subTabId = currentSubBtn.getAttribute("data-subtab");
        let currentSubTab = document.querySelector(subTabId);

        if (!currentSubBtn.classList.contains("active")) {
            subtabBtn.forEach(function (item) {
                item.classList.remove("active");
            });
            subtabItem.forEach(function (item) {
                item.classList.remove("active");
            })
            currentSubBtn.classList.add("active");
            currentSubTab.classList.add("active");
        }
    })
}

document.querySelector(".subtabs-nav-btn:nth-child(2)").click();