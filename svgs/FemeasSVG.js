export const FemEletHdxFdxSVG = (text, uploadedFile, initialNumber, typeRecording) => {
    // Criar o elemento SVG
    let svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttribute("width", "687");
    svgElement.setAttribute("height", "688");
    svgElement.setAttribute("viewBox", "0 0 687 688");
    svgElement.setAttribute("fill", "none");

    // Adicionar elipses e caminhos
    let ellipse1 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    ellipse1.setAttribute("cx", "343.5");
    ellipse1.setAttribute("cy", "340");
    ellipse1.setAttribute("rx", "339.5");
    ellipse1.setAttribute("ry", "340");
    ellipse1.setAttribute("fill", "#1A95D3");
    svgElement.appendChild(ellipse1);

    let ellipse2 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    ellipse2.setAttribute("cx", "343.498");
    ellipse2.setAttribute("cy", "340");
    ellipse2.setAttribute("rx", "303.763");
    ellipse2.setAttribute("ry", "304.211");
    ellipse2.setAttribute("fill", "#1A95D3");
    svgElement.appendChild(ellipse2);

    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M254.157 340C254.157 419.064 422.446 483.158 343.499 483.158C254.157 501.053 191.617 428.011 191.617 348.948C191.617 269.884 264.551 196.842 343.499 196.842C422.446 196.842 254.157 260.936 254.157 340Z");
    path.setAttribute("fill", "#646464");
    svgElement.appendChild(path);

    let ellipse3 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    ellipse3.setAttribute("cx", "361.369");
    ellipse3.setAttribute("cy", "340");
    ellipse3.setAttribute("rx", "142.947");
    ellipse3.setAttribute("ry", "143.158");
    ellipse3.setAttribute("fill", "#0B0C0B");
    svgElement.appendChild(ellipse3);

    let path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2.setAttribute("d", "M452 329.5C452 373.407 416.407 409 372.5 409C328.593 409 293 373.407 293 329.5C293 285.593 328.593 250 372.5 250C416.407 250 452 285.593 452 329.5Z");
    path2.setAttribute("fill", "white");
    svgElement.appendChild(path2);

    // Adicionar texto e imagem com base na condição
    if (typeRecording != '' && typeRecording != 5) {
        let foreignObject = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        foreignObject.setAttribute("x", "0");
        foreignObject.setAttribute("y", "0");
        foreignObject.setAttribute("width", "100%");
        foreignObject.setAttribute("height", "100%");

        let div = document.createElement("div");
        div.style.position = "absolute";
        div.style.top = "60px";
        div.style.width = "100%";
        div.style.display = "flex";
        div.style.justifyContent = "center";

        let textElement = document.createElement("span");
        textElement.textContent = text;
        textElement.style.fill = "black";
        textElement.style.fontWeight = "bold";
        textElement.style.fontSize = "70px";
        textElement.id = 'textoCurvadoFemea';
        div.appendChild(textElement);
        foreignObject.appendChild(div);
        svgElement.appendChild(foreignObject);

        if (uploadedFile) {
            let imageElement = document.createElementNS("http://www.w3.org/2000/svg", "image");
            imageElement.setAttribute("x", "42%");
            imageElement.setAttribute("y", "72%");
            imageElement.setAttribute("width", "120px");
            imageElement.setAttribute("height", "120px");
            imageElement.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", uploadedFile);
            svgElement.appendChild(imageElement);
        }
    }

    // Adicionar as definições de filtro
    let defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    svgElement.appendChild(defs);

    for (let i = 0; i < 5; i++) {
        let filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
        filter.setAttribute("id", `filter${i}_d_2058_1080`);
        filter.setAttribute("x", "0");
        filter.setAttribute("y", "0");
        filter.setAttribute("width", "687");
        filter.setAttribute("height", "688");
        filter.setAttribute("filterUnits", "userSpaceOnUse");
        filter.setAttribute("color-interpolation-filters", "sRGB");
        defs.appendChild(filter);

        let feFlood = document.createElementNS("http://www.w3.org/2000/svg", "feFlood");
        feFlood.setAttribute("flood-opacity", "0");
        feFlood.setAttribute("result", "BackgroundImageFix");
        filter.appendChild(feFlood);

        let feColorMatrix = document.createElementNS("http://www.w3.org/2000/svg", "feColorMatrix");
        feColorMatrix.setAttribute("in", "SourceAlpha");
        feColorMatrix.setAttribute("type", "matrix");
        feColorMatrix.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0");
        feColorMatrix.setAttribute("result", "hardAlpha");
        filter.appendChild(feColorMatrix);

        let feOffset = document.createElementNS("http://www.w3.org/2000/svg", "feOffset");
        feOffset.setAttribute("dy", "4");
        filter.appendChild(feOffset);

        let feGaussianBlur = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
        feGaussianBlur.setAttribute("stdDeviation", "2");
        filter.appendChild(feGaussianBlur);

        let feComposite = document.createElementNS("http://www.w3.org/2000/svg", "feComposite");
        feComposite.setAttribute("in2", "hardAlpha");
        feComposite.setAttribute("operator", "out");
        filter.appendChild(feComposite);

        let feColorMatrix2 = document.createElementNS("http://www.w3.org/2000/svg", "feColorMatrix");
        feColorMatrix2.setAttribute("type", "matrix");
        feColorMatrix2.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0");
        filter.appendChild(feColorMatrix2);

        let feBlend = document.createElementNS("http://www.w3.org/2000/svg", "feBlend");
        feBlend.setAttribute("mode", "normal");
        feBlend.setAttribute("in2", "BackgroundImageFix");
        filter.appendChild(feBlend);

        let feBlend2 = document.createElementNS("http://www.w3.org/2000/svg", "feBlend");
        feBlend2.setAttribute("mode", "normal");
        feBlend2.setAttribute("in", "SourceGraphic");
        feBlend2.setAttribute("in2", `effect1_dropShadow_2058_1080_${i}`);
        feBlend2.setAttribute("result", "shape");
        filter.appendChild(feBlend2);
    }

    return svgElement;
};

export const FemGrandeSVG = (text, uploadedFile, initialNumber, typeRecording) => {
    // Criar o elemento SVG
    let svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttribute("width", "1456");
    svgElement.setAttribute("height", "2100");
    svgElement.setAttribute("viewBox", "0 0 1456 2100");
    svgElement.setAttribute("fill", "none");

    // Adicionar os caminhos
    let path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute("d", "M177.185 2099.71C47.0028 2092.99 2.74062 2061.36 0 1938.78V1111.16C388.697 839.072 520.835 621.212 516.148 107.289H731.852V1111.16V2099.71H177.185Z");
    path1.setAttribute("fill", "#1A95D3");
    svgElement.appendChild(path1);

    let path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2.setAttribute("d", "M1278.81 2099.71C1409 2092.99 1453.26 2061.36 1456 1938.78V1111.16C1067.3 839.072 935.165 621.212 939.852 107.289H724.148V1111.16V2099.71H1278.81Z");
    path2.setAttribute("fill", "#1A95D3");
    svgElement.appendChild(path2);

    // Adicionar os círculos
    for (let i = 0; i < 3; i++) {
        let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", "735.708");
        circle.setAttribute("cy", "291.2");
        circle.setAttribute("fill", i === 2 ? "black" : "#1A95D3");
        switch (i) {
            case 0:
                circle.setAttribute("r", "291.2");
                break;
            case 1:
                circle.setAttribute("r", "260.547");
                break;
            case 2:
                circle.setAttribute("r", "122.611");
                break;
            default:
                break;
        }
        svgElement.appendChild(circle);
    }

    // Adicionar texto e imagem com base na condição
    if (typeRecording != '' && typeRecording != 5) {
        let foreignObject = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        foreignObject.setAttribute("x", "0");
        foreignObject.setAttribute("y", "0");
        foreignObject.setAttribute("width", "100%");
        foreignObject.setAttribute("height", "100%");

        let div = document.createElement("div");
        div.style.width = "100%";
        div.style.height = "100%";
        div.style.display = "flex";
        div.style.alignItems = "center";
        div.style.justifyContent = "center";
        div.style.textAlign = "center";

        let textElement = document.createElement("span");
        textElement.textContent = text;
        textElement.style.fill = "black";
        textElement.style.fontWeight = "bold";
        textElement.style.fontSize = "96px";
        textElement.id = 'textoCurvadoFemea';
        div.appendChild(textElement);
        foreignObject.appendChild(div);
        svgElement.appendChild(foreignObject);

        let textElement2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        textElement2.setAttribute("x", "50%");
        textElement2.setAttribute("y", "91%");
        textElement2.setAttribute("dominant-baseline", "middle");
        textElement2.setAttribute("text-anchor", "middle");
        textElement2.setAttribute("fill", "black");
        textElement2.setAttribute("font-weight", "bold");
        textElement2.setAttribute("font-size", "280");
        textElement2.textContent = initialNumber;
        svgElement.appendChild(textElement2);

        if (uploadedFile) {
            let imageElement = document.createElementNS("http://www.w3.org/2000/svg", "image");
            imageElement.setAttribute("x", "35%");
            imageElement.setAttribute("y", "60%");
            imageElement.setAttribute("width", "500px");
            imageElement.setAttribute("height", "500px");
            imageElement.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", uploadedFile);
            svgElement.appendChild(imageElement);
        }
    }

    // Adicionar as definições de filtro
    let defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    svgElement.appendChild(defs);

    for (let i = 0; i < 3; i++) {
        let filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
        filter.setAttribute("id", `filter${i}_d_2058_991`);
        filter.setAttribute("x", i === 2 ? "440.508" : "471.164");
        filter.setAttribute("y", i === 2 ? "0" : "30.6523");
        filter.setAttribute("width", i === 2 ? "590.398" : "529.094");
        filter.setAttribute("height", i === 2 ? "590.4" : "529.095");
        filter.setAttribute("filterUnits", "userSpaceOnUse");
        filter.setAttribute("color-interpolation-filters", "sRGB");
        defs.appendChild(filter);

        let feFlood = document.createElementNS("http://www.w3.org/2000/svg", "feFlood");
        feFlood.setAttribute("flood-opacity", "0");
        feFlood.setAttribute("result", "BackgroundImageFix");
        filter.appendChild(feFlood);

        let feColorMatrix = document.createElementNS("http://www.w3.org/2000/svg", "feColorMatrix");
        feColorMatrix.setAttribute("in", "SourceAlpha");
        feColorMatrix.setAttribute("type", "matrix");
        feColorMatrix.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0");
        feColorMatrix.setAttribute("result", "hardAlpha");
        filter.appendChild(feColorMatrix);

        let feOffset = document.createElementNS("http://www.w3.org/2000/svg", "feOffset");
        feOffset.setAttribute("dy", "4");
        filter.appendChild(feOffset);

        let feGaussianBlur = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
        feGaussianBlur.setAttribute("stdDeviation", "2");
        filter.appendChild(feGaussianBlur);

        let feComposite = document.createElementNS("http://www.w3.org/2000/svg", "feComposite");
        feComposite.setAttribute("in2", "hardAlpha");
        feComposite.setAttribute("operator", "out");
        filter.appendChild(feComposite);

        let feColorMatrix2 = document.createElementNS("http://www.w3.org/2000/svg", "feColorMatrix");
        feColorMatrix2.setAttribute("type", "matrix");
        feColorMatrix2.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0");
        filter.appendChild(feColorMatrix2);

        let feBlend = document.createElementNS("http://www.w3.org/2000/svg", "feBlend");
        feBlend.setAttribute("mode", "normal");
        feBlend.setAttribute("in2", "BackgroundImageFix");
        feBlend.setAttribute("result", `effect1_dropShadow_2058_991_${i}`);
        filter.appendChild(feBlend);

        let feBlend2 = document.createElementNS("http://www.w3.org/2000/svg", "feBlend");
        feBlend2.setAttribute("mode", "normal");
        feBlend2.setAttribute("in", "SourceGraphic");
        feBlend2.setAttribute("in2", `effect1_dropShadow_2058_991_${i}`);
        feBlend2.setAttribute("result", "shape");
        filter.appendChild(feBlend2);
    }

    return svgElement;
};

export const FemMaxiSVG = (text, uploadedFile, initialNumber, typeRecording) => {
    // Criar o elemento SVG
    let svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttribute("width", "1464");
    svgElement.setAttribute("height", "2277");
    svgElement.setAttribute("viewBox", "0 0 1464 2277");
    svgElement.setAttribute("fill", "none");

    // Adicionar os caminhos
    let path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute("d", "M177.231 2276.54C47.0148 2269.82 2.74133 2238.18 0 2115.57L7.62653 1096.11C396.423 823.95 528.595 606.034 523.907 91.9795H739.666V1096.11L732.04 2276.54H177.231Z");
    path1.setAttribute("fill", "#1A95D3");
    svgElement.appendChild(path1);

    let path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2.setAttribute("d", "M1286.77 2276.54C1416.99 2269.82 1461.26 2238.18 1464 2115.57L1464 1096.11C1075.2 823.95 943.031 606.034 947.719 91.9795H731.96V1096.11L731.96 2276.54H1286.77Z");
    path2.setAttribute("fill", "#1A95D3");
    svgElement.appendChild(path2);

    // Adicionar os círculos
    for (let i = 0; i < 3; i++) {
        let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", "735.829");
        circle.setAttribute("cy", "291.275");
        circle.setAttribute("fill", i === 2 ? "black" : "#1A95D3");
        switch (i) {
            case 0:
                circle.setAttribute("r", "291.275");
                break;
            case 1:
                circle.setAttribute("r", "260.614");
                break;
            case 2:
                circle.setAttribute("r", "122.642");
                break;
            default:
                break;
        }
        svgElement.appendChild(circle);
    }

    // Adicionar texto e imagem com base na condição
    if (typeRecording != '' && typeRecording != 5) {
        let foreignObject = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        foreignObject.setAttribute("x", "0");
        foreignObject.setAttribute("y", "0");
        foreignObject.setAttribute("width", "100%");
        foreignObject.setAttribute("height", "100%");

        let div = document.createElement("div");
        div.style.width = "100%";
        div.style.height = "100%";
        div.style.display = "flex";
        div.style.alignItems = "center";
        div.style.justifyContent = "center";
        div.style.textAlign = "center";

        let textElement = document.createElement("span");
        textElement.textContent = text;
        textElement.style.fill = "black";
        textElement.style.fontWeight = "bold";
        textElement.style.fontSize = "96px";
        textElement.id = 'textoCurvadoFemea';
        div.appendChild(textElement);
        foreignObject.appendChild(div);
        svgElement.appendChild(foreignObject);

        let textElement2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        textElement2.setAttribute("x", "50%");
        textElement2.setAttribute("y", "91%");
        textElement2.setAttribute("dominant-baseline", "middle");
        textElement2.setAttribute("text-anchor", "middle");
        textElement2.setAttribute("fill", "black");
        textElement2.setAttribute("font-weight", "bold");
        textElement2.setAttribute("font-size", "280");
        textElement2.textContent = initialNumber;
        svgElement.appendChild(textElement2);

        if (uploadedFile) {
            let imageElement = document.createElementNS("http://www.w3.org/2000/svg", "image");
            imageElement.setAttribute("x", "35%");
            imageElement.setAttribute("y", "60%");
            imageElement.setAttribute("width", "500px");
            imageElement.setAttribute("height", "500px");
            imageElement.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", uploadedFile);
            svgElement.appendChild(imageElement);
        }
    }

    // Adicionar as definições de filtro
    let defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    svgElement.appendChild(defs);

    for (let i = 0; i < 3; i++) {
        let filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
        filter.setAttribute("id", `filter${i}_d_2058_988`);
        filter.setAttribute("x", i === 2 ? "440.555" : "471.219");
        filter.setAttribute("y", i === 2 ? "0" : "30.6602");
        filter.setAttribute("width", i === 2 ? "590.547" : "529.227");
        filter.setAttribute("height", i === 2 ? "590.549" : "529.229");
        filter.setAttribute("filterUnits", "userSpaceOnUse");
        filter.setAttribute("color-interpolation-filters", "sRGB");
        defs.appendChild(filter);

        let feFlood = document.createElementNS("http://www.w3.org/2000/svg", "feFlood");
        feFlood.setAttribute("flood-opacity", "0");
        feFlood.setAttribute("result", "BackgroundImageFix");
        filter.appendChild(feFlood);

        let feColorMatrix = document.createElementNS("http://www.w3.org/2000/svg", "feColorMatrix");
        feColorMatrix.setAttribute("in", "SourceAlpha");
        feColorMatrix.setAttribute("type", "matrix");
        feColorMatrix.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0");
        feColorMatrix.setAttribute("result", "hardAlpha");
        filter.appendChild(feColorMatrix);

        let feOffset = document.createElementNS("http://www.w3.org/2000/svg", "feOffset");
        feOffset.setAttribute("dy", i === 2 ? "4" : "1");
        filter.appendChild(feOffset);

        let feGaussianBlur = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
        feGaussianBlur.setAttribute("stdDeviation", "2");
        filter.appendChild(feGaussianBlur);

        let feComposite = document.createElementNS("http://www.w3.org/2000/svg", "feComposite");
        feComposite.setAttribute("in2", "hardAlpha");
        feComposite.setAttribute("operator", "out");
        filter.appendChild(feComposite);

        let feColorMatrix2 = document.createElementNS("http://www.w3.org/2000/svg", "feColorMatrix");
        feColorMatrix2.setAttribute("type", "matrix");
        feColorMatrix2.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0");
        filter.appendChild(feColorMatrix2);

        let feBlend = document.createElementNS("http://www.w3.org/2000/svg", "feBlend");
        feBlend.setAttribute("mode", "normal");
        feBlend.setAttribute("in2", "BackgroundImageFix");
        feBlend.setAttribute("result", `effect1_dropShadow_2058_988_${i}`);
        filter.appendChild(feBlend);

        let feBlend2 = document.createElementNS("http://www.w3.org/2000/svg", "feBlend");
        feBlend2.setAttribute("mode", "normal");
        feBlend2.setAttribute("in", "SourceGraphic");
        feBlend2.setAttribute("in2", `effect1_dropShadow_2058_988_${i}`);
        feBlend2.setAttribute("result", "shape");
        filter.appendChild(feBlend2);
    }

    return svgElement;
};

export const FemMediaSVG = (text, uploadedFile, initialNumber, typeRecording) => {
    // Criar o elemento SVG
    let svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttribute("width", "1449");
    svgElement.setAttribute("height", "1563");
    svgElement.setAttribute("viewBox", "0 0 1449 1563");
    svgElement.setAttribute("fill", "none");

    // Adicionar os caminhos
    let path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute("d", "M176.218 1562.38C46.7463 1555.69 2.72567 1524.23 0 1402.33V1105.1C386.576 834.489 517.993 617.818 513.332 106.699H727.859V1105.1V1562.38H176.218Z");
    path1.setAttribute("fill", "#1A95D3");
    svgElement.appendChild(path1);

    let path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2.setAttribute("d", "M1271.84 1562.38C1401.31 1555.69 1445.33 1524.23 1448.06 1402.33V1105.1C1061.48 834.489 930.063 617.818 934.724 106.699H720.197V1105.1V1562.38H1271.84Z");
    path2.setAttribute("fill", "#1A95D3");
    svgElement.appendChild(path2);

    // Adicionar os círculos
    for (let i = 0; i < 3; i++) {
        let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", "716.408");
        circle.setAttribute("cy", "289.611");
        circle.setAttribute("fill", i === 2 ? "black" : "#1A95D3");
        switch (i) {
            case 0:
                circle.setAttribute("r", "289.611");
                break;
            case 1:
                circle.setAttribute("r", "259.126");
                break;
            case 2:
                circle.setAttribute("r", "121.942");
                break;
            default:
                break;
        }
        svgElement.appendChild(circle);
    }

    // Adicionar texto e imagem com base na condição
    if (typeRecording != '' && typeRecording != 5) {
        let foreignObject = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        foreignObject.setAttribute("x", "0");
        foreignObject.setAttribute("y", "0");
        foreignObject.setAttribute("width", "100%");
        foreignObject.setAttribute("height", "100%");

        let div = document.createElement("div");
        div.style.width = "100%";
        div.style.height = "100%";
        div.style.display = "flex";
        div.style.alignItems = "center";
        div.style.justifyContent = "center";
        div.style.textAlign = "center";

        let textElement = document.createElement("span");
        textElement.textContent = text;
        textElement.style.fill = "black";
        textElement.style.fontWeight = "bold";
        textElement.style.fontSize = "96px";
        textElement.id = 'textoCurvadoFemea';
        div.appendChild(textElement);
        foreignObject.appendChild(div);
        svgElement.appendChild(foreignObject);

        let textElement2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        textElement2.setAttribute("x", "50%");
        textElement2.setAttribute("y", "91%");
        textElement2.setAttribute("dominant-baseline", "middle");
        textElement2.setAttribute("text-anchor", "middle");
        textElement2.setAttribute("fill", "black");
        textElement2.setAttribute("font-weight", "bold");
        textElement2.setAttribute("font-size", "280");
        textElement2.textContent = initialNumber;
        svgElement.appendChild(textElement2);

        if (uploadedFile) {
            let imageElement = document.createElementNS("http://www.w3.org/2000/svg", "image");
            imageElement.setAttribute("x", "42%");
            imageElement.setAttribute("y", "62%");
            imageElement.setAttribute("width", "280px");
            imageElement.setAttribute("height", "280px");
            imageElement.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", uploadedFile);
            svgElement.appendChild(imageElement);
        }
    }

    // Adicionar as definições de filtro
    let defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    svgElement.appendChild(defs);

    for (let i = 0; i < 3; i++) {
        let filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
        filter.setAttribute("id", `filter${i}_d_2058_994`);
        filter.setAttribute("x", i === 2 ? "422.797" : "453.281");
        filter.setAttribute("y", i === 2 ? "0" : "30.4854");
        filter.setAttribute("width", i === 2 ? "587.219" : "526.25");
        filter.setAttribute("height", i === 2 ? "587.223" : "526.252");
        filter.setAttribute("filterUnits", "userSpaceOnUse");
        filter.setAttribute("color-interpolation-filters", "sRGB");
        defs.appendChild(filter);

        let feFlood = document.createElementNS("http://www.w3.org/2000/svg", "feFlood");
        feFlood.setAttribute("flood-opacity", "0");
        feFlood.setAttribute("result", "BackgroundImageFix");
        filter.appendChild(feFlood);

        let feColorMatrix = document.createElementNS("http://www.w3.org/2000/svg", "feColorMatrix");
        feColorMatrix.setAttribute("in", "SourceAlpha");
        feColorMatrix.setAttribute("type", "matrix");
        feColorMatrix.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0");
        feColorMatrix.setAttribute("result", "hardAlpha");
        filter.appendChild(feColorMatrix);

        let feOffset = document.createElementNS("http://www.w3.org/2000/svg", "feOffset");
        feOffset.setAttribute("dy", i === 2 ? "4" : "1");
        filter.appendChild(feOffset);

        let feGaussianBlur = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
        feGaussianBlur.setAttribute("stdDeviation", "2");
        filter.appendChild(feGaussianBlur);

        let feComposite = document.createElementNS("http://www.w3.org/2000/svg", "feComposite");
        feComposite.setAttribute("in2", "hardAlpha");
        feComposite.setAttribute("operator", "out");
        filter.appendChild(feComposite);

        let feColorMatrix2 = document.createElementNS("http://www.w3.org/2000/svg", "feColorMatrix");
        feColorMatrix2.setAttribute("type", "matrix");
        feColorMatrix2.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0");
        filter.appendChild(feColorMatrix2);

        let feBlend = document.createElementNS("http://www.w3.org/2000/svg", "feBlend");
        feBlend.setAttribute("mode", "normal");
        feBlend.setAttribute("in2", "BackgroundImageFix");
        feBlend.setAttribute("result", `effect1_dropShadow_2058_994_${i}`);
        filter.appendChild(feBlend);

        let feBlend2 = document.createElementNS("http://www.w3.org/2000/svg", "feBlend");
        feBlend2.setAttribute("mode", "normal");
        feBlend2.setAttribute("in", "SourceGraphic");
        feBlend2.setAttribute("in2", `effect1_dropShadow_2058_994_${i}`);
        feBlend2.setAttribute("result", "shape");
        filter.appendChild(feBlend2);
    }

    return svgElement;
};

export const FemOvinoCaprinoSVG = (text, uploadedFile, initialNumber, typeRecording) => {
    // Criar o elemento SVG
    let svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttribute("width", "1468");
    svgElement.setAttribute("height", "1376");
    svgElement.setAttribute("viewBox", "0 0 1468 1376");
    svgElement.setAttribute("fill", "none");

    // Adicionar os caminhos
    let path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute("d", "M734 0V1035.33V1375.28H77.2632C21.6337 1356.74 2.57544 1310.9 0 1290.29V1035.33L734 0Z");
    path1.setAttribute("fill", "#1A95D3");
    svgElement.appendChild(path1);

    let path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2.setAttribute("d", "M734 0V1035.33V1375.28H1390.74C1446.37 1356.74 1465.42 1310.9 1468 1290.29V1035.33L734 0Z");
    path2.setAttribute("fill", "#1A95D3");
    svgElement.appendChild(path2);

    // Adicionar os círculos e a elipse
    for (let i = 0; i < 4; i++) {
        let shape;
        switch (i) {
            case 0:
            case 1:
                shape = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                shape.setAttribute("cx", "741.725");
                shape.setAttribute("cy", "293.6");
                shape.setAttribute("fill", i === 3 ? "#1A95D3" : "#646464");
                switch (i) {
                    case 0:
                        shape.setAttribute("r", "293.6");
                        break;
                    case 1:
                        shape.setAttribute("r", "262.695");
                        break;
                    default:
                        break;
                }
                break;
            case 2:
                shape = document.createElementNS("http://www.w3.org/2000/svg", "path");
                shape.setAttribute("d", "M664.459 293.6C664.459 361.874 809.996 417.221 741.722 417.221C664.459 432.673 610.375 369.6 610.375 301.326C610.375 233.052 673.448 169.979 741.722 169.979C809.996 169.979 664.459 225.326 664.459 293.6Z");
                shape.setAttribute("fill", "#646464");
                break;
            case 3:
                shape = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
                shape.setAttribute("cx", "757.176");
                shape.setAttribute("cy", "293.6");
                shape.setAttribute("rx", "123.621");
                shape.setAttribute("ry", "123.621");
                shape.setAttribute("fill", "#1A95D3");
                break;
            default:
                break;
        }
        svgElement.appendChild(shape);
    }

    // Adicionar texto e imagem com base na condição
    if (typeRecording != '' && typeRecording != 5) {
        let foreignObject = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        foreignObject.setAttribute("x", "0");
        foreignObject.setAttribute("y", "0");
        foreignObject.setAttribute("width", "100%");
        foreignObject.setAttribute("height", "100%");

        let div = document.createElement("div");
        div.style.width = "100%";
        div.style.height = "100%";
        div.style.display = "flex";
        div.style.alignItems = "center";
        div.style.justifyContent = "center";
        div.style.textAlign = "center";

        let textElement = document.createElement("span");
        textElement.textContent = text;
        textElement.style.fill = "black";
        textElement.style.fontWeight = "bold";
        textElement.style.fontSize = "96px";
        textElement.id = 'textoCurvadoFemea';
        div.appendChild(textElement);
        foreignObject.appendChild(div);
        svgElement.appendChild(foreignObject);

        let textElement2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        textElement2.setAttribute("x", "50%");
        textElement2.setAttribute("y", "91%");
        textElement2.setAttribute("dominant-baseline", "middle");
        textElement2.setAttribute("text-anchor", "middle");
        textElement2.setAttribute("fill", "black");
        textElement2.setAttribute("font-weight", "bold");
        textElement2.setAttribute("font-size", "280");
        textElement2.textContent = initialNumber;
        svgElement.appendChild(textElement2);

        if (uploadedFile) {
            let imageElement = document.createElementNS("http://www.w3.org/2000/svg", "image");
            imageElement.setAttribute("x", "42%");
            imageElement.setAttribute("y", "62%");
            imageElement.setAttribute("width", "280px");
            imageElement.setAttribute("height", "280px");
            imageElement.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", uploadedFile);
            svgElement.appendChild(imageElement);
        }
    }

    // Adicionar as definições de filtro
    let defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    svgElement.appendChild(defs);

    for (let i = 0; i < 4; i++) {
        let filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
        filter.setAttribute("id", `filter${i}_d_2058_985`);
        filter.setAttribute("x", i === 2 ? "606.375" : (i === 3 ? "608.955" : "444.125"));
        filter.setAttribute("y", i === 2 ? "169.979" : (i === 3 ? "148.379" : "0"));
        filter.setAttribute("width", i === 2 ? "157.57" : (i === 3 ? "290.442" : "595.203"));
        filter.setAttribute("height", i === 2 ? "257.598" : (i === 3 ? "290.442" : "595.2"));
        filter.setAttribute("filterUnits", "userSpaceOnUse");
        filter.setAttribute("color-interpolation-filters", "sRGB");
        defs.appendChild(filter);

        let feFlood = document.createElementNS("http://www.w3.org/2000/svg", "feFlood");
        feFlood.setAttribute("flood-opacity", "0");
        feFlood.setAttribute("result", "BackgroundImageFix");
        filter.appendChild(feFlood);

        let feColorMatrix = document.createElementNS("http://www.w3.org/2000/svg", "feColorMatrix");
        feColorMatrix.setAttribute("in", "SourceAlpha");
        feColorMatrix.setAttribute("type", "matrix");
        feColorMatrix.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0");
        feColorMatrix.setAttribute("result", "hardAlpha");
        filter.appendChild(feColorMatrix);

        let feOffset = document.createElementNS("http://www.w3.org/2000/svg", "feOffset");
        feOffset.setAttribute("dy", i === 3 ? "-3" : "4");
        filter.appendChild(feOffset);

        let feGaussianBlur = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
        feGaussianBlur.setAttribute("stdDeviation", i === 3 ? "10.8" : "2");
        filter.appendChild(feGaussianBlur);

        let feComposite = document.createElementNS("http://www.w3.org/2000/svg", "feComposite");
        feComposite.setAttribute("in2", "hardAlpha");
        feComposite.setAttribute("operator", "out");
        filter.appendChild(feComposite);

        let feColorMatrix2 = document.createElementNS("http://www.w3.org/2000/svg", "feColorMatrix");
        feColorMatrix2.setAttribute("type", "matrix");
        feColorMatrix2.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0");
        filter.appendChild(feColorMatrix2);

        let feBlend = document.createElementNS("http://www.w3.org/2000/svg", "feBlend");
        feBlend.setAttribute("mode", "normal");
        feBlend.setAttribute("in2", "BackgroundImageFix");
        feBlend.setAttribute("result", `effect1_dropShadow_2058_985_${i}`);
        filter.appendChild(feBlend);

        let feBlend2 = document.createElementNS("http://www.w3.org/2000/svg", "feBlend");
        feBlend2.setAttribute("mode", "normal");
        feBlend2.setAttribute("in", "SourceGraphic");
        feBlend2.setAttribute("in2", `effect1_dropShadow_2058_985_${i}`);
        feBlend2.setAttribute("result", "shape");
        filter.appendChild(feBlend2);
    }

    return svgElement;
};

export const FemPequenaSVG = (text, uploadedFile, initialNumber, typeRecording) => {
    // Criar o elemento SVG
    let svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttribute("width", "687");
    svgElement.setAttribute("height", "688");
    svgElement.setAttribute("viewBox", "0 0 687 688");
    svgElement.setAttribute("fill", "none");

    // Adicionar os elementos com filtro
    for (let i = 0; i < 4; i++) {
        let shape;
        switch (i) {
            case 0:
            case 1:
                shape = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
                shape.setAttribute("cx", "343.5");
                shape.setAttribute("cy", "340");
                shape.setAttribute("fill", i === 3 ? "#1A95D3" : "#646464");
                switch (i) {
                    case 0:
                        shape.setAttribute("rx", "339.5");
                        shape.setAttribute("ry", "340");
                        break;
                    case 1:
                        shape.setAttribute("rx", "303.763");
                        shape.setAttribute("ry", "304.211");
                        break;
                    default:
                        break;
                }
                break;
            case 2:
                shape = document.createElementNS("http://www.w3.org/2000/svg", "path");
                shape.setAttribute("d", "M254.157 340C254.157 419.064 422.446 483.158 343.499 483.158C254.157 501.053 191.617 428.011 191.617 348.948C191.617 269.884 264.551 196.842 343.499 196.842C422.446 196.842 254.157 260.936 254.157 340Z");
                shape.setAttribute("fill", "#646464");
                break;
            case 3:
                shape = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
                shape.setAttribute("cx", "361.369");
                shape.setAttribute("cy", "340");
                shape.setAttribute("rx", "142.947");
                shape.setAttribute("ry", "143.158");
                shape.setAttribute("fill", "#1A95D3");
                break;
            default:
                break;
        }
        svgElement.appendChild(shape);
    }

    // Adicionar texto com base na condição
    if (typeRecording != '' && typeRecording != 5) {
        let foreignObject = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        foreignObject.setAttribute("x", "0");
        foreignObject.setAttribute("y", "0");
        foreignObject.setAttribute("width", "100%");
        foreignObject.setAttribute("height", "100%");

        let div = document.createElement("div");
        div.style.position = "absolute";
        div.style.top = "60px";
        div.style.width = "100%";
        div.style.display = "flex";
        div.style.justifyContent = "center";

        let textElement = document.createElement("span");
        textElement.textContent = text;
        textElement.style.fill = "black";
        textElement.style.fontWeight = "bold";
        textElement.style.fontSize = "70px";
        textElement.id = 'textoCurvadoFemea';
        div.appendChild(textElement);
        foreignObject.appendChild(div);
        svgElement.appendChild(foreignObject);

        let textElement2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        textElement2.setAttribute("x", "50%");
        textElement2.setAttribute("y", "83%");
        textElement2.setAttribute("dominant-baseline", "middle");
        textElement2.setAttribute("text-anchor", "middle");
        textElement2.setAttribute("fill", "black");
        textElement2.setAttribute("font-weight", "bold");
        textElement2.setAttribute("font-size", "90");
        textElement2.textContent = initialNumber;
        svgElement.appendChild(textElement2);
    }

    // Adicionar as definições de filtro
    let defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    svgElement.appendChild(defs);

    for (let i = 0; i < 4; i++) {
        let filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
        filter.setAttribute("id", `filter${i}_d_2058_981`);
        filter.setAttribute("x", i === 0 ? "0" : "35.7344");
        filter.setAttribute("y", i === 0 ? "0" : "35.7896");
        filter.setAttribute("width", i === 0 ? "687" : "615.523");
        filter.setAttribute("height", i === 0 ? "688" : "616.421");
        filter.setAttribute("filterUnits", "userSpaceOnUse");
        filter.setAttribute("color-interpolation-filters", "sRGB");
        defs.appendChild(filter);

        let feFlood = document.createElementNS("http://www.w3.org/2000/svg", "feFlood");
        feFlood.setAttribute("flood-opacity", "0");
        feFlood.setAttribute("result", "BackgroundImageFix");
        filter.appendChild(feFlood);

        let feColorMatrix = document.createElementNS("http://www.w3.org/2000/svg", "feColorMatrix");
        feColorMatrix.setAttribute("in", "SourceAlpha");
        feColorMatrix.setAttribute("type", "matrix");
        feColorMatrix.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0");
        feColorMatrix.setAttribute("result", "hardAlpha");
        filter.appendChild(feColorMatrix);

        let feOffset = document.createElementNS("http://www.w3.org/2000/svg", "feOffset");
        feOffset.setAttribute("dy", i === 3 ? "-3" : "4");
        filter.appendChild(feOffset);

        let feGaussianBlur = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
        feGaussianBlur.setAttribute("stdDeviation", i === 3 ? "10.8" : "2");
        filter.appendChild(feGaussianBlur);

        let feComposite = document.createElementNS("http://www.w3.org/2000/svg", "feComposite");
        feComposite.setAttribute("in2", "hardAlpha");
        feComposite.setAttribute("operator", "out");
        filter.appendChild(feComposite);

        let feColorMatrix2 = document.createElementNS("http://www.w3.org/2000/svg", "feColorMatrix");
        feColorMatrix2.setAttribute("type", "matrix");
        feColorMatrix2.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0");
        filter.appendChild(feColorMatrix2);

        let feBlend = document.createElementNS("http://www.w3.org/2000/svg", "feBlend");
        feBlend.setAttribute("mode", "normal");
        feBlend.setAttribute("in2", "BackgroundImageFix");
        feBlend.setAttribute("result", `effect1_dropShadow_2058_981_${i}`);
        filter.appendChild(feBlend);

        let feBlend2 = document.createElementNS("http://www.w3.org/2000/svg", "feBlend");
        feBlend2.setAttribute("mode", "normal");
        feBlend2.setAttribute("in", "SourceGraphic");
        feBlend2.setAttribute("in2", `effect1_dropShadow_2058_981_${i}`);
        feBlend2.setAttribute("result", "shape");
        filter.appendChild(feBlend2);
    }

    return svgElement;
};

export const FemSuinoOvinoSVG = (text, uploadedFile, initialNumber, typeRecording) => {
    // Criar o elemento SVG
    let svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttribute("width", "1477");
    svgElement.setAttribute("height", "1640");
    svgElement.setAttribute("viewBox", "0 0 1477 1640");
    svgElement.setAttribute("fill", "none");

    // Adicionar os elementos com filtro
    for (let i = 0; i < 4; i++) {
        let shape;
        switch (i) {
            case 0:
            case 1:
                shape = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                shape.setAttribute("cx", "746.16");
                shape.setAttribute("cy", "295.355");
                shape.setAttribute("fill", i === 3 ? "#1A95D3" : "#646464");
                switch (i) {
                    case 0:
                        shape.setAttribute("r", "295.355");
                        break;
                    case 1:
                        shape.setAttribute("r", "264.265");
                        break;
                    default:
                        break;
                }
                break;
            case 2:
                shape = document.createElementNS("http://www.w3.org/2000/svg", "path");
                shape.setAttribute("d", "M668.439 295.356C668.439 364.039 814.846 419.716 746.164 419.716C668.439 435.262 614.031 371.811 614.031 303.129C614.031 234.447 677.482 170.996 746.164 170.996C814.846 170.996 668.439 226.674 668.439 295.356Z");
                shape.setAttribute("fill", "#646464");
                break;
            case 3:
                shape = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
                shape.setAttribute("cx", "761.704");
                shape.setAttribute("cy", "295.356");
                shape.setAttribute("rx", "124.36");
                shape.setAttribute("ry", "124.36");
                shape.setAttribute("fill", "#1A95D3");
                break;
            default:
                break;
        }
        svgElement.appendChild(shape);
    }

    // Adicionar texto com base na condição
    if (typeRecording != '' && typeRecording != 5) {
        let foreignObject = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        foreignObject.setAttribute("x", "0");
        foreignObject.setAttribute("y", "0");
        foreignObject.setAttribute("width", "100%");
        foreignObject.setAttribute("height", "100%");

        let div = document.createElement("div");
        div.style.width = "100%";
        div.style.height = "100%";
        div.style.display = "flex";
        div.style.alignItems = "center";
        div.style.justifyContent = "center";
        div.style.textAlign = "center";

        let textElement = document.createElement("span");
        textElement.textContent = text;
        textElement.style.fill = "black";
        textElement.style.fontWeight = "bold";
        textElement.style.fontSize = "96px";
        textElement.id = 'textoCurvadoFemea';
        div.appendChild(textElement);
        foreignObject.appendChild(div);
        svgElement.appendChild(foreignObject);

        let textElement2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        textElement2.setAttribute("x", "50%");
        textElement2.setAttribute("y", "91%");
        textElement2.setAttribute("dominant-baseline", "middle");
        textElement2.setAttribute("text-anchor", "middle");
        textElement2.setAttribute("fill", "black");
        textElement2.setAttribute("font-weight", "bold");
        textElement2.setAttribute("font-size", "280");
        textElement2.textContent = initialNumber;
        svgElement.appendChild(textElement2);

        // Adicionar a imagem se estiver presente
        if (uploadedFile) {
            let imageElement = document.createElementNS("http://www.w3.org/2000/svg", "image");
            imageElement.setAttribute("x", "42%");
            imageElement.setAttribute("y", "62%");
            imageElement.setAttribute("width", "280px");
            imageElement.setAttribute("height", "280px");
            imageElement.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", uploadedFile);
            svgElement.appendChild(imageElement);
        }
    }

    // Adicionar as definições de filtro
    let defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    svgElement.appendChild(defs);

    for (let i = 0; i < 4; i++) {
        let filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
        filter.setAttribute("id", `filter${i}_d_2058_982`);
        filter.setAttribute("x", i === 0 ? "446.805" : "477.898");
        filter.setAttribute("y", i === 0 ? "0" : "31.0898");
        filter.setAttribute("width", i === 0 ? "598.711" : "536.531");
        filter.setAttribute("height", i === 0 ? "598.711" : "536.531");
        filter.setAttribute("filterUnits", "userSpaceOnUse");
        filter.setAttribute("color-interpolation-filters", "sRGB");
        defs.appendChild(filter);

        let feFlood = document.createElementNS("http://www.w3.org/2000/svg", "feFlood");
        feFlood.setAttribute("flood-opacity", "0");
        feFlood.setAttribute("result", "BackgroundImageFix");
        filter.appendChild(feFlood);

        let feColorMatrix = document.createElementNS("http://www.w3.org/2000/svg", "feColorMatrix");
        feColorMatrix.setAttribute("in", "SourceAlpha");
        feColorMatrix.setAttribute("type", "matrix");
        feColorMatrix.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0");
        feColorMatrix.setAttribute("result", "hardAlpha");
        filter.appendChild(feColorMatrix);

        let feOffset = document.createElementNS("http://www.w3.org/2000/svg", "feOffset");
        feOffset.setAttribute("dy", i === 3 ? "-3" : "4");
        filter.appendChild(feOffset);

        let feGaussianBlur = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
        feGaussianBlur.setAttribute("stdDeviation", i === 3 ? "10.8" : "2");
        filter.appendChild(feGaussianBlur);

        let feComposite = document.createElementNS("http://www.w3.org/2000/svg", "feComposite");
        feComposite.setAttribute("in2", "hardAlpha");
        feComposite.setAttribute("operator", "out");
        filter.appendChild(feComposite);

        let feColorMatrix2 = document.createElementNS("http://www.w3.org/2000/svg", "feColorMatrix");
        feColorMatrix2.setAttribute("type", "matrix");
        feColorMatrix2.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0");
        filter.appendChild(feColorMatrix2);

        let feBlend = document.createElementNS("http://www.w3.org/2000/svg", "feBlend");
        feBlend.setAttribute("mode", "normal");
        feBlend.setAttribute("in2", "BackgroundImageFix");
        feBlend.setAttribute("result", `effect1_dropShadow_2058_982_${i}`);
        filter.appendChild(feBlend);

        let feBlend2 = document.createElementNS("http://www.w3.org/2000/svg", "feBlend");
        feBlend2.setAttribute("mode", "normal");
        feBlend2.setAttribute("in", "SourceGraphic");
        feBlend2.setAttribute("in2", `effect1_dropShadow_2058_982_${i}`);
        feBlend2.setAttribute("result", "shape");
        filter.appendChild(feBlend2);
    }

    return svgElement;
};
