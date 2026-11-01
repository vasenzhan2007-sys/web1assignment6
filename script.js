$(document).ready(function() {

    // Task 0
    console.log("jQuery is ready!");


    // Task 1 - Selectors and CSS

    // Tag selector
    $("p").css("line-height", "1.6");

    // ID selector
    $("#greeting").text("Hello! Welcome to my jQuery portfolio!");

    // Class selector
    $(".headline").css("font-weight", "bold");


    // Light theme
    $("#lightButton").click(function() {
        $("body").removeClass("dark-theme");
    });


    // Dark theme
    $("#darkButton").click(function() {
        $("body").addClass("dark-theme");
    });


    // Task 2 - Hide
    $("#hideButton").click(function() {
        $("#status").hide();
    });


    // Show
    $("#showButton").click(function() {
        $("#status").show();
    });


    // Toggle
    $("#toggleButton").click(function() {
        $("#funFacts").toggle();
    });


    // Task 3 - Fade methods

    $("#fadeOutButton").click(function() {
        $(".gallery img").fadeOut();
    });


    $("#fadeInButton").click(function() {
        $(".gallery img").fadeIn();
    });


    $("#fadeToggleButton").click(function() {
        $(".gallery img").fadeToggle();
    });


    // Task 4 - Slide methods

    $(".slideTitle").click(function() {
        $(this).next(".slideContent").slideToggle();
    });


    $("#slideUpButton").click(function() {
        $(".slideContent").slideUp();
    });


    $("#slideDownButton").click(function() {
        $(".slideContent").slideDown();
    });


    // Task 5 - Add Skill

    $("#addSkillButton").click(function() {

        let skill = $("#newSkill").val().trim();

        if (skill !== "") {
            $("#skillList").append("<li>" + skill + "</li>");
            $("#newSkill").val("");
        }

    });


    // Prepend Skill
    $("#prependSkillButton").click(function() {

        let skill = $("#newSkill").val().trim();

        if (skill !== "") {
            $("#skillList").prepend("<li>" + skill + "</li>");
            $("#newSkill").val("");
        }

    });


    // Remove Skill
    $("#removeSkillButton").click(function() {
        $("#skillList li:last").remove();
    });


    // Task 6 - Change attribute

    $("#changeLinkButton").click(function() {

        $("#socialLink").attr(
            "href",
            "https://www.linkedin.com"
        );

        $("#socialLink").text(
            "Visit LinkedIn"
        );

    });


    // Task 7 - Live form interaction

    $("#liveName").on("input", function() {
        $("#nameOutput").text(
            $("#liveName").val()
        );
    });


    $("#liveEmail").on("input", function() {
        $("#emailOutput").text(
            $("#liveEmail").val()
        );
    });


    // Task 8 - Animation

    let animated = false;

    $("#animateButton").click(function() {

        if (animated === false) {

            $("#htmlBar").animate({
                width: "90%"
            }, 1000);

            $("#cssBar").animate({
                width: "80%"
            }, 1000);

            $("#jsBar").animate({
                width: "70%"
            }, 1000);

            animated = true;

        } else {

            $("#htmlBar").animate({
                width: "0"
            }, 1000);

            $("#cssBar").animate({
                width: "0"
            }, 1000);

            $("#jsBar").animate({
                width: "0"
            }, 1000);

            animated = false;
        }

    });

});