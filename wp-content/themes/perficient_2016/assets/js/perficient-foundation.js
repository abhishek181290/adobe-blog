function isPageEditor() {
    if (typeof Sitecore == "undefined") {
        return false;
    }
    if (typeof Sitecore.PageModes == "undefined" || Sitecore.PageModes == null) {
        return false;
    }
    return Sitecore.PageModes.PageEditor != null;
}