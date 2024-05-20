document.addEventListener('DOMContentLoaded', function () {
    fetch('https://gpf-openfxt.vercel.app/unlock_key_source/status.txt', { cache: 'no-cache' })
        .then(response => response.text())
        .then(text => {
            if (text.trim() === "1") {
            } else {
                alert(text.trim());
                window.close();
            }
        })
        .catch(error => {
            alert("The status server is under maintenance, please try again later. Thank you for your interest and use of OpenFXT\'s services.");
            window.close();
        });

    fetch('https://gpf-openfxt.vercel.app/unlock_key_source/update_status.txt', { cache: 'no-cache' })
        .then(response => response.text())
        .then(text => {
            if (text.trim() === "1") {
            } else {
                alert("An update has been detected, please visit the OpenFXT platform or the upcoming document below to download the latest version.");
                chrome.tabs.create({ url: text.trim() });
                window.close();
            }
        })
        .catch(error => {
            alert("The update server is under maintenance, please try again later. Thank you for your interest and use of OpenFXT\'s services.");
            window.close();
        });
});
