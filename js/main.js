const createWinBox = (title, content, width, height) => {
    return new WinBox({
        title: title,
        width: width,
        height: height,
        top: window.innerWidth > 768 ? 50 : 0,
        right: window.innerWidth > 768 ? 50 : 0,
        bottom: 0,
        left: window.innerWidth > 768 ? 50 : 0,
        border: 4,
        mount: content,
        background: "#800020",
        class: ["no-max", "no-full", "no-resize"],
        onfocus: function () {
            this.setBackground("#800020");
        },
        onblur: function () {
            this.setBackground("#400010");
        },
    });
};

const loadTextFile = (filePath) => {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status === 200) {
            document.getElementById("txt-content").textContent =
                xhr.responseText;
        } else {
            console.error("Failed to load the text file. Status:", xhr.status);
        }
    };
    xhr.open("GET", filePath, true);
    xhr.send();
};

const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const resume = document.querySelector("#resume");

about.addEventListener("click", () => {
    width = window.innerWidth > 768 ? "400px" : "90%";
    const height = window.innerWidth > 768 ? "230px" : "30%";
    createWinBox(
        "About",
        document.getElementById("about-content").cloneNode(true),
        width,
        height,
    );
});

contact.addEventListener("click", () => {
    const width = window.innerWidth > 768 ? "400px" : "90%";
    const height = window.innerWidth > 768 ? "200px" : "25%";
    createWinBox(
        "Contact",
        document.getElementById("contact-content").cloneNode(true),
        width,
        height,
    );
});

resume.addEventListener("click", () => {
    loadTextFile("../resume.txt");
    const width = window.innerWidth > 768 ? window.innerWidth / 3 + 60 : "90%";
    const height = window.innerWidth > 768 ? window.innerHeight - 100 : "90%";
    createWinBox(
        "Resume",
        document.querySelector("#resume-content"),
        width,
        height,
    );
});

$.fn.typewriter = function () {
    this.each(function () {
        var c = $(this),
            b = c.html(),
            a = 0,
            d = 0;
        c.html("");
        var e = function () {
            if ("<" == b.substring(a, a + 1)) {
                var f = new RegExp(/<span class="instant"/),
                    g = new RegExp(/<span class="clear"/);
                if (b.substring(a, b.length).match(f))
                    a += b.substring(a, b.length).indexOf("</span>") + 7;
                else if (b.substring(a, b.length).match(g))
                    (d = a),
                        (a += b.substring(a, b.length).indexOf("</span>") + 7);
                else for (; ">" != b.substring(a, a + 1); ) a++;
            }
            c.html(b.substring(d, a++) + (a & 1 ? "_" : ""));
            a >= b.length || setTimeout(e, 70 + 100 * Math.random());
        };
        e();
    });
    return this;
};
$(".terminal").typewriter();
