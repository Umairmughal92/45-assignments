function makeshirt(size, print) {
    if (size === void 0) { size = "large"; }
    if (print === void 0) { print = "I love TS"; }
    console.log("creating ".concat(size, " size shirt with ").concat(print, " print on it."));
}
makeshirt();
makeshirt("medium");
makeshirt("extralarge", "I Hate PYTHON");
