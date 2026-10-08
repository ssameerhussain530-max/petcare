document.addEventListener("DOMContentLoaded", function () {


    /* ===============================
       GET ALL PAGES
       =============================== */

    const pages = document.querySelectorAll(".page");


    /* ===============================
       GET ALL PAGE LINKS
       =============================== */

    const links = document.querySelectorAll("[data-page]");



    /* ===============================
       OPEN PAGE FUNCTION
       =============================== */

    function openPage(pageName) {


        // Hide every page

        pages.forEach(function (page) {

            page.classList.remove("active");

        });



        // Find selected page

        const selectedPage =
            document.getElementById(pageName);



        // Show selected page

        if (selectedPage) {

            selectedPage.classList.add("active");

        }



        // Change active navigation

        links.forEach(function (link) {

            link.classList.remove("active");


            if (link.dataset.page === pageName) {

                link.classList.add("active");

            }

        });



        // Change browser URL

        history.pushState(
            null,
            "",
            "#" + pageName
        );


        // Scroll to top

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }



    /* ===============================
       NAVIGATION CLICK
       =============================== */

    links.forEach(function (link) {


        link.addEventListener("click", function (event) {


            // Stop normal link behaviour

            event.preventDefault();


            // Get page name

            const pageName =
                link.getAttribute("data-page");


            // Open page

            openPage(pageName);

        });

    });



    /* ===============================
       BROWSER BACK / FORWARD
       =============================== */

    window.addEventListener(
        "popstate",
        function () {


            let pageName =
                window.location.hash.substring(1);


            if (!pageName) {

                pageName = "home";

            }


            openPageWithoutChangingURL(pageName);

        }
    );



    /* ===============================
       OPEN PAGE WITHOUT URL CHANGE
       =============================== */

    function openPageWithoutChangingURL(pageName) {


        pages.forEach(function (page) {

            page.classList.remove("active");

        });


        const selectedPage =
            document.getElementById(pageName);


        if (selectedPage) {

            selectedPage.classList.add("active");

        }


        links.forEach(function (link) {

            link.classList.remove("active");


            if (link.dataset.page === pageName) {

                link.classList.add("active");

            }

        });


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }



    /* ===============================
       FIRST PAGE
       =============================== */

    let firstPage =
        window.location.hash.substring(1);


    if (!firstPage) {

        firstPage = "home";

    }


    openPageWithoutChangingURL(firstPage);



    /* ===============================
       CONTACT FORM
       =============================== */

    const form =
        document.getElementById("petForm");


    if (form) {


        form.addEventListener(
            "submit",
            function (event) {


                event.preventDefault();


                const name =
                    document.getElementById("name").value;


                const email =
                    document.getElementById("email").value;


                const petType =
                    document.getElementById("petType").value;


                const message =
                    document.getElementById("message").value;


                if (
                    name.trim() === "" ||
                    email.trim() === "" ||
                    petType === "" ||
                    message.trim() === ""
                ) {


                    alert(
                        "Please fill all the details."
                    );


                    return;

                }


                alert(
                    "Thank you, " +
                    name +
                    "! 🐾 Your pet care request has been received."
                );


                form.reset();

            }
        );

    }

});