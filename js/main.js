const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const resume = document.querySelector("#resume");
const aboutContent = document.querySelector("#about-content");
const contactContent = document.querySelector("#contact-content");
const resumeContent = document.querySelector("#resume-content");

about.addEventListener("click", () => {
    const aboutBox = new WinBox({
        title: "About",
        width: "400px",
        height: "320px",
        top: (window.innerHeight - 400) / 2,
        right: window.innerWidth - 550,
        bottom: (window.innerHeight - 400) / 2,
        left: 150,
        mount: aboutContent,
        onfocus: function () {
            this.setBackground("#00aa00");
        },
        onblur: function () {
            this.setBackground("#777");
        },
    });
});

contact.addEventListener("click", () => {
    const contactBox = new WinBox({
        title: "Contact",
        background: "#00aa00",
        width: "400px",
        height: "220px",
        top: 50,
        right: window.innerWidth - (window.innerWidth - 550),
        bottom: window.innerHeight - 50,
        left: window.innerWidth - 550,
        mount: contactContent,
        onfocus: function () {
            this.setBackground("#00aa00");
        },
        onblur: function () {
            this.setBackground("#777");
        },
    });
});

resume.addEventListener("click", () => {
    const resumeBox = new WinBox({
        title: "Resume",
        background: "#00aa00",
        width: window.innerWidth / 3 + 60,
        height: window.innerHeight - 100,
        top: 50,
        right: (window.innerWidth - (window.innerWidth / 3 + 60)) / 2,
        bottom: 50,
        left: (window.innerWidth - (window.innerWidth / 3 + 60)) / 2,
        mount: resumeContent,
        onfocus: function () {
            this.setBackground("#00aa00");
        },
        onblur: function () {
            this.setBackground("#777");
        },
    });
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
