chrome.contextMenus.removeAll();

//YouTube
chrome.contextMenus.create({
    title: "YouTube",
    contexts: ["selection"],
    onclick: function(info) {
        //alert('first');
        chrome.tabs.create({url: "https://www.youtube.com/results?search_query=" + info.selectionText.trim().replace(/\s+/g, "+")})
    }
});

//Wikipedia
chrome.contextMenus.create({
    title: "Wikipedia",
    contexts: ["selection"],
    onclick: function(info) {
        chrome.tabs.create({url: "https://en.wikipedia.org/wiki/" + info.selectionText.trim().replace(/\s+/g, "_")})
    }
});

//Reddit
chrome.contextMenus.create({
    title: "Reddit",
    contexts: ["selection"],
    onclick: function(info) {
        chrome.tabs.create({url: "https://www.reddit.com/search?q=" + info.selectionText.trim().replace(/\s+/g, "+") + "&restrict_sr=&sort=relevance&t=all"})
    }
});

//Maps
chrome.contextMenus.create({
    title: "Google Maps",
    contexts: ["selection"],
    onclick: function(info) {
        chrome.tabs.create({url: "https://www.google.com/maps/search/?api=1&query=" + info.selectionText.trim()})
    }
});

//Facebook
chrome.contextMenus.create({
    title: "Facebook",
    contexts: ["selection"],
    onclick: function(info) {
        chrome.tabs.create({url: "https://www.facebook.com/search/top/?q=" + info.selectionText.trim()})
    }
});

//Twitter
chrome.contextMenus.create({
    title: "Twitter",
    contexts: ["selection"],
    onclick: function(info) {
        //alert('first');
        chrome.tabs.create({url: "https://twitter.com/search?q=" + info.selectionText.trim()})
    }
});

//Amazon
chrome.contextMenus.create({
    title: "Amazon",
    contexts: ["selection"],
    id: "Amazon"
});

    //Amazon United States
    chrome.contextMenus.create({
        title: "Amazon.com",
        contexts: ["selection"],
        parentId: "Amazon",
        onclick: function(info) {
            //alert('first');
            chrome.tabs.create({url: "https://www.amazon.com/s?url=search-alias%3Daps&field-keywords=" + info.selectionText.trim().replace(/\s+/g, "+")})
        }
    });

    //Amazon United Kingdom
    chrome.contextMenus.create({
        title: "Amazon.co.uk",
        contexts: ["selection"],
        parentId: "Amazon",
        onclick: function(info) {
            //alert('first');
            chrome.tabs.create({url: "https://www.amazon.co.uk/s?url=search-alias%3Daps&field-keywords=" + info.selectionText.trim().replace(/\s+/g, "+")})
        }
    });

    //Amazon Canada
    chrome.contextMenus.create({
        title: "Amazon.ca",
        contexts: ["selection"],
        parentId: "Amazon",
        onclick: function(info) {
            //alert('first');
            chrome.tabs.create({url: "https://www.amazon.ca/s?url=search-alias%3Daps&field-keywords=" + info.selectionText.trim().replace(/\s+/g, "+")})
        }
    });

    //Amazon Germany
    chrome.contextMenus.create({
        title: "Amazon.de",
        contexts: ["selection"],
        parentId: "Amazon",
        onclick: function(info) {
            //alert('first');
            chrome.tabs.create({url: "https://www.amazon.de/s?url=search-alias%3Daps&field-keywords=" + info.selectionText.trim().replace(/\s+/g, "+")})
        }
    });

    //Amazon France
    chrome.contextMenus.create({
        title: "Amazon.fr",
        contexts: ["selection"],
        parentId: "Amazon",
        onclick: function(info) {
            //alert('first');
            chrome.tabs.create({url: "https://www.amazon.fr/s?url=search-alias%3Daps&field-keywords=" + info.selectionText.trim().replace(/\s+/g, "+")})
        }
    });

    //Amazon Japan
    chrome.contextMenus.create({
        title: "Amazon.co.jp",
        contexts: ["selection"],
        parentId: "Amazon",
        onclick: function(info) {
            //alert('first');
            chrome.tabs.create({url: "https://www.amazon.co.jp/s?url=search-alias%3Daps&field-keywords=" + info.selectionText.trim().replace(/\s+/g, "+")})
        }
    });

    //Amazon Brazil
    chrome.contextMenus.create({
        title: "Amazon.br",
        contexts: ["selection"],
        parentId: "Amazon",
        onclick: function(info) {
            //alert('first');
            chrome.tabs.create({url: "https://www.amazon.br/s?url=search-alias%3Daps&field-keywords=" + info.selectionText.trim().replace(/\s+/g, "+")})
        }
    });

    //Amazon Austria
    chrome.contextMenus.create({
        title: "Amazon.at",
        contexts: ["selection"],
        parentId: "Amazon",
        onclick: function(info) {
            //alert('first');
            chrome.tabs.create({url: "https://www.amazon.at/s?url=search-alias%3Daps&field-keywords=" + info.selectionText.trim().replace(/\s+/g, "+")})
        }
    });

    //Amazon Italy
    chrome.contextMenus.create({
        title: "Amazon.it",
        contexts: ["selection"],
        parentId: "Amazon",
        onclick: function(info) {
            //alert('first');
            chrome.tabs.create({url: "https://www.amazon.it/s?url=search-alias%3Daps&field-keywords=" + info.selectionText.trim().replace(/\s+/g, "+")})
        }
    });

    //Amazon Spain
    chrome.contextMenus.create({
        title: "Amazon.es",
        contexts: ["selection"],
        parentId: "Amazon",
        onclick: function(info) {
            //alert('first');
            chrome.tabs.create({url: "https://www.amazon.es/s?url=search-alias%3Daps&field-keywords=" + info.selectionText.trim().replace(/\s+/g, "+")})
        }
    });

    //Amazon China
    chrome.contextMenus.create({
        title: "Amazon.cn",
        contexts: ["selection"],
        parentId: "Amazon",
        onclick: function(info) {
            //alert('first');
            chrome.tabs.create({url: "https://www.amazon.cn/s?url=search-alias%3Daps&field-keywords=" + info.selectionText.trim().replace(/\s+/g, "+")})
        }
    });

    //Amazon Mexico
    chrome.contextMenus.create({
        title: "Amazon.com.mx",
        contexts: ["selection"],
        parentId: "Amazon",
        onclick: function(info) {
            //alert('first');
            chrome.tabs.create({url: "https://www.amazon.com.mx/s?url=search-alias%3Daps&field-keywords=" + info.selectionText.trim().replace(/\s+/g, "+")})
        }
    });

    //Amazon Australia
    chrome.contextMenus.create({
        title: "Amazon.com.au",
        contexts: ["selection"],
        parentId: "Amazon",
        onclick: function(info) {
            //alert('first');
            chrome.tabs.create({url: "https://www.amazon.com.au/s?url=search-alias%3Daps&field-keywords=" + info.selectionText.trim().replace(/\s+/g, "+")})
        }
    });

    //Amazon Netherlands
    chrome.contextMenus.create({
        title: "Amazon.nl",
        contexts: ["selection"],
        parentId: "Amazon",
        onclick: function(info) {
            //alert('first');
            chrome.tabs.create({url: "https://www.amazon.nl/s?url=search-alias%3Daps&field-keywords=" + info.selectionText.trim().replace(/\s+/g, "+")})
        }
    });

    //Amazon India
    chrome.contextMenus.create({
        title: "Amazon.in",
        contexts: ["selection"],
        parentId: "Amazon",
        onclick: function(info) {
            //alert('first');
            chrome.tabs.create({url: "https://www.amazon.in/s?url=search-alias%3Daps&field-keywords=" + info.selectionText.trim().replace(/\s+/g, "+")})
        }
    });

//Netflix
chrome.contextMenus.create({
    title: "Netflix",
    contexts: ["selection"],
    onclick: function(info) {
        //alert('first');
        chrome.tabs.create({url: "https://www.netflix.com/search?q=" + info.selectionText.trim()})
    }
});

//IMDB
chrome.contextMenus.create({
    title: "IMDB",
    contexts: ["selection"],
    onclick: function(info) {
        //alert('first');
        chrome.tabs.create({url: "https://www.imdb.com/find?ref_=nv_sr_fn&q=" + info.selectionText.trim().replace(/\s+/g, "+") + "&s=all"})
    }
});

//GitHub
chrome.contextMenus.create({
    title: "GitHub",
    contexts: ["selection"],
    onclick: function(info) {
        //alert('first');
        chrome.tabs.create({url: "https://github.com/search?q=" + info.selectionText.trim().replace(/\s+/g, "+")})
    }
});

