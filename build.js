const fs = require("fs-extra");
const path = require("path");

const buildDir = path.join("dist");

if (!fs.existsSync(buildDir)) {
    fs.mkdirSync(buildDir);
}

const windowAssignmentLine = 'window.PIXI = PIXI;';
const pixiDistFiles = ["pixi.js", "pixi.min.js"];
pixiDistFiles.forEach((pixiDistFile) => {
    fs.copySync(
        path.join("node_modules", "pixi.js", "dist", pixiDistFile),
        path.join(buildDir, pixiDistFile),
    );
    fs.appendFileSync(
        path.join(buildDir, pixiDistFile),
        windowAssignmentLine,
    );
});
