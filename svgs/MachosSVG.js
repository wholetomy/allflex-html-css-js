export const MachoGrandeSVG = (text, uploadedFile, initialNumber, typeRecording) => {
    // Criar o elemento SVG
    let svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttribute("width", "1448");
    svgElement.setAttribute("height", "2089");
    svgElement.setAttribute("viewBox", "0 0 1448 2089");
    svgElement.setAttribute("fill", "none");

    // Path 1
    let path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute("d", "M176.212 2088.17C46.7445 2081.49 2.72556 2050.03 0 1928.13V1105.05C386.561 834.458 517.973 617.795 513.312 106.696H727.831V1105.05V2088.17H176.212Z");
    path1.setAttribute("fill", "#EEEE22");
    svgElement.appendChild(path1);

    // Path 2
    let path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2.setAttribute("d", "M1271.79 2088.17C1401.26 2081.49 1445.27 2050.03 1448 1928.13V1105.05C1061.44 834.458 930.027 617.795 934.688 106.696H720.169V1105.05V2088.17H1271.79Z");
    path2.setAttribute("fill", "#EEEE22");
    svgElement.appendChild(path2);

    // Grupo 1
    let group1 = document.createElementNS("http://www.w3.org/2000/svg", "g");
    let circle1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle1.setAttribute("cx", "731.631");
    circle1.setAttribute("cy", "289.6");
    circle1.setAttribute("r", "289.6");
    circle1.setAttribute("fill", "#EEEE22");
    group1.appendChild(circle1);
    svgElement.appendChild(group1);

    // Grupo 2
    let group2 = document.createElementNS("http://www.w3.org/2000/svg", "g");
    let circle2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle2.setAttribute("cx", "731.631");
    circle2.setAttribute("cy", "289.6");
    circle2.setAttribute("r", "259.116");
    circle2.setAttribute("fill", "#EEEE22");
    group2.appendChild(circle2);
    svgElement.appendChild(group2);

    // Grupo 3
    let group3 = document.createElementNS("http://www.w3.org/2000/svg", "g");
    let circle3 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle3.setAttribute("cx", "731.632");
    circle3.setAttribute("cy", "289.6");
    circle3.setAttribute("r", "76.2105");
    circle3.setAttribute("fill", "url(#paint0_angular_2058_940)");
    group3.appendChild(circle3);
    svgElement.appendChild(group3);

    // Adicionar texto e imagem com base na condição
    if (typeRecording != '' && typeRecording != 5 && typeRecording == 4) {
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

        let text1 = document.createElement("span");
        text1.textContent = text;
        text1.style.fill = "black";
        text1.style.fontWeight = "bold";
        text1.style.fontSize = "96px";
        text1.id = 'textoCurvado';
        div.appendChild(text1);
        foreignObject.appendChild(div);
        svgElement.appendChild(foreignObject);

        let text2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text2.setAttribute("x", "50%");
        text2.setAttribute("y", "85%");
        text2.setAttribute("dominant-baseline", "middle");
        text2.setAttribute("text-anchor", "middle");
        text2.setAttribute("fill", "black");
        text2.setAttribute("font-weight", "bold");
        text2.setAttribute("font-size", "650");
        text2.textContent = initialNumber;
        svgElement.appendChild(text2);

        if (uploadedFile) {
            let image = document.createElementNS("http://www.w3.org/2000/svg", "image");
            image.setAttribute("x", "35%");
            image.setAttribute("y", "40%");
            image.setAttribute("width", "500px");
            image.setAttribute("height", "500px");
            image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", uploadedFile);
            svgElement.appendChild(image);
        }
    }

    // Adicionar as definições de gradiente
    let defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    svgElement.appendChild(defs);

    let radialGradient = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient");
    radialGradient.setAttribute("id", "paint0_angular_2058_940");
    radialGradient.setAttribute("cx", "0");
    radialGradient.setAttribute("cy", "0");
    radialGradient.setAttribute("r", "1");
    radialGradient.setAttribute("gradientUnits", "userSpaceOnUse");
    radialGradient.setAttribute("gradientTransform", "translate(731.632 289.6) rotate(40.6013) scale(70.2627)");
    defs.appendChild(radialGradient);

    let stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop1.setAttribute("offset", "0.095");
    stop1.setAttribute("stop-color", "#0B0C0B");
    radialGradient.appendChild(stop1);

    let stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop2.setAttribute("offset", "0.525");
    stop2.setAttribute("stop-color", "#656566");
    radialGradient.appendChild(stop2);

    let stop3 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop3.setAttribute("offset", "0.73");
    stop3.setAttribute("stop-color", "#F2F2F0");
    radialGradient.appendChild(stop3);

    return svgElement;
};

export const MachoMaxiSVG = (text, uploadedFile, initialNumber, typeRecording) => {
    // Criar o elemento SVG
    let svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttribute("width", "1448");
    svgElement.setAttribute("height", "2252");
    svgElement.setAttribute("viewBox", "0 0 1448 2252");
    svgElement.setAttribute("fill", "none");

    // Path 1
    let path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute("d", "M175.294 2251.66C46.501 2245.01 2.71137 2213.71 0 2092.45L7.54318 1084.13C392.091 814.941 522.818 599.407 518.181 90.9707H731.582V1084.13L724.039 2251.66H175.294Z");
    path1.setAttribute("fill", "#EEEE22");
    svgElement.appendChild(path1);

    // Path 2
    let path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2.setAttribute("d", "M1272.71 2251.66C1401.5 2245.01 1445.29 2213.71 1448 2092.45L1448 1084.13C1063.45 814.941 932.725 599.407 937.362 90.9707H723.961V1084.13L723.961 2251.66H1272.71Z");
    path2.setAttribute("fill", "#EEEE22");
    svgElement.appendChild(path2);

    // Grupo 1
    let group1 = document.createElementNS("http://www.w3.org/2000/svg", "g");
    let circle1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle1.setAttribute("cx", "727.865");
    circle1.setAttribute("cy", "288.091");
    circle1.setAttribute("r", "288.091");
    circle1.setAttribute("fill", "#EEEE22");
    group1.appendChild(circle1);
    svgElement.appendChild(group1);

    // Grupo 2
    let group2 = document.createElementNS("http://www.w3.org/2000/svg", "g");
    let circle2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle2.setAttribute("cx", "727.868");
    circle2.setAttribute("cy", "288.091");
    circle2.setAttribute("r", "257.766");
    circle2.setAttribute("fill", "#EEEE22");
    group2.appendChild(circle2);
    svgElement.appendChild(group2);

    // Grupo 3
    let group3 = document.createElementNS("http://www.w3.org/2000/svg", "g");
    let circle3 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle3.setAttribute("cx", "727.868");
    circle3.setAttribute("cy", "288.092");
    circle3.setAttribute("r", "75.8135");
    circle3.setAttribute("fill", "url(#paint0_angular_2058_943)");
    group3.appendChild(circle3);
    svgElement.appendChild(group3);

    // Adicionar texto e imagem com base na condição
    if (typeRecording != '' && typeRecording != 5 && typeRecording == 4) {
        // Criar foreignObject
        let foreignObject = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        foreignObject.setAttribute("x", "0");
        foreignObject.setAttribute("y", "0");
        foreignObject.setAttribute("width", "100%");
        foreignObject.setAttribute("height", "100%");

        // Criar div dentro do foreignObject
        let div = document.createElement("div");
        div.style.width = "100%";
        div.style.height = "100%";
        div.style.display = "flex";
        div.style.alignItems = "center";
        div.style.justifyContent = "center";
        div.style.textAlign = "center";

        // Adicionar texto ao div
        let textElement = document.createElement("span");
        textElement.textContent = text;
        textElement.style.fill = "black";
        textElement.style.fontWeight = "bold";
        textElement.style.fontSize = "96px";
        textElement.id = "textoCurvado";
        div.appendChild(textElement);

        // Adicionar div ao foreignObject
        foreignObject.appendChild(div);

        // Adicionar foreignObject ao SVG
        svgElement.appendChild(foreignObject);

        // Adicionar número inicial ao SVG
        let text2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text2.setAttribute("x", "50%");
        text2.setAttribute("y", "85%");
        text2.setAttribute("dominant-baseline", "middle");
        text2.setAttribute("text-anchor", "middle");
        text2.setAttribute("fill", "black");
        text2.setAttribute("font-weight", "bold");
        text2.setAttribute("font-size", "650");
        text2.textContent = initialNumber;
        svgElement.appendChild(text2);

        // Adicionar imagem ao SVG
        if (uploadedFile) {
            let image = document.createElementNS("http://www.w3.org/2000/svg", "image");
            image.setAttribute("x", "35%");
            image.setAttribute("y", "40%");
            image.setAttribute("width", "500px");
            image.setAttribute("height", "500px");
            image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", uploadedFile);
            svgElement.appendChild(image);
        }
    }

    // Adicionar as definições de gradiente
    let defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    svgElement.appendChild(defs);

    let radialGradient = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient");
    radialGradient.setAttribute("id", "paint0_angular_2058_943");
    radialGradient.setAttribute("cx", "0");
    radialGradient.setAttribute("cy", "0");
    radialGradient.setAttribute("r", "1");
    radialGradient.setAttribute("gradientUnits", "userSpaceOnUse");
    radialGradient.setAttribute("gradientTransform", "translate(727.868 288.092) rotate(40.6013) scale(69.8966)");
    defs.appendChild(radialGradient);

    let stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop1.setAttribute("offset", "0.095");
    stop1.setAttribute("stop-color", "#0B0C0B");
    radialGradient.appendChild(stop1);

    let stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop2.setAttribute("offset", "0.525");
    stop2.setAttribute("stop-color", "#656566");
    radialGradient.appendChild(stop2);

    let stop3 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop3.setAttribute("offset", "0.73");
    stop3.setAttribute("stop-color", "#F2F2F0");
    radialGradient.appendChild(stop3);

    return svgElement;
};

export const MachoMedioSVG = (text, uploadedFile, initialNumber, typeRecording) => {
    // Criar o elemento SVG
    let svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttribute("width", "1448");
    svgElement.setAttribute("height", "1563");
    svgElement.setAttribute("viewBox", "0 0 1448 1563");
    svgElement.setAttribute("fill", "none");

    // Path 1
    let path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute("d", "M176.212 1562.32C46.7445 1555.63 2.72556 1524.17 0 1402.27V1105.05C386.561 834.456 517.973 617.793 513.312 106.694H727.831V1105.05V1562.32H176.212Z");
    path1.setAttribute("fill", "#EEEE22");
    svgElement.appendChild(path1);

    // Path 2
    let path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2.setAttribute("d", "M1271.79 1562.32C1401.26 1555.63 1445.27 1524.17 1448 1402.27V1105.05C1061.44 834.456 930.027 617.793 934.688 106.694H720.169V1105.05V1562.32H1271.79Z");
    path2.setAttribute("fill", "#EEEE22");
    svgElement.appendChild(path2);

    // Grupo 1
    let group1 = document.createElementNS("http://www.w3.org/2000/svg", "g");
    let circle1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle1.setAttribute("cx", "731.623");
    circle1.setAttribute("cy", "289.6");
    circle1.setAttribute("r", "289.6");
    circle1.setAttribute("fill", "#EEEE22");
    group1.appendChild(circle1);
    svgElement.appendChild(group1);

    // Grupo 2
    let group2 = document.createElementNS("http://www.w3.org/2000/svg", "g");
    let circle2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle2.setAttribute("cx", "731.624");
    circle2.setAttribute("cy", "289.6");
    circle2.setAttribute("r", "259.116");
    circle2.setAttribute("fill", "#EEEE22");
    group2.appendChild(circle2);
    svgElement.appendChild(group2);

    // Grupo 3
    let group3 = document.createElementNS("http://www.w3.org/2000/svg", "g");
    let circle3 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle3.setAttribute("cx", "731.625");
    circle3.setAttribute("cy", "289.6");
    circle3.setAttribute("r", "76.2105");
    circle3.setAttribute("fill", "url(#paint0_angular_2058_937)");
    group3.appendChild(circle3);
    svgElement.appendChild(group3);

    // Adicionar texto e imagem com base na condição
    if (typeRecording != '' && typeRecording != 5 && typeRecording == 4) {
        // Criar foreignObject
        let foreignObject = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        foreignObject.setAttribute("x", "0");
        foreignObject.setAttribute("y", "0");
        foreignObject.setAttribute("width", "100%");
        foreignObject.setAttribute("height", "100%");

        // Criar div dentro do foreignObject
        let div = document.createElement("div");
        div.style.width = "100%";
        div.style.height = "100%";
        div.style.display = "flex";
        div.style.alignItems = "center";
        div.style.justifyContent = "center";
        div.style.textAlign = "center";

        // Adicionar texto ao div
        let textElement = document.createElement("span");
        textElement.textContent = text;
        textElement.style.fill = "black";
        textElement.style.fontWeight = "bold";
        textElement.style.fontSize = "96px";
        textElement.id = "textoCurvado"; // Adicionar o ID
        div.appendChild(textElement);

        // Adicionar div ao foreignObject
        foreignObject.appendChild(div);

        // Adicionar foreignObject ao SVG
        svgElement.appendChild(foreignObject);

        // Adicionar número inicial ao SVG
        let text2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text2.setAttribute("x", "50%");
        text2.setAttribute("y", "85%");
        text2.setAttribute("dominant-baseline", "middle");
        text2.setAttribute("text-anchor", "middle");
        text2.setAttribute("fill", "black");
        text2.setAttribute("font-weight", "bold");
        text2.setAttribute("font-size", "650");
        text2.textContent = initialNumber;
        svgElement.appendChild(text2);

        // Adicionar imagem ao SVG
        if (uploadedFile) {
            let image = document.createElementNS("http://www.w3.org/2000/svg", "image");
            image.setAttribute("x", "42%");
            image.setAttribute("y", "42%");
            image.setAttribute("width", "280px");
            image.setAttribute("height", "280px");
            image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", uploadedFile);
            svgElement.appendChild(image);
        }
    }

    // Adicionar as definições de gradiente
    let defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    svgElement.appendChild(defs);

    let radialGradient = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient");
    radialGradient.setAttribute("id", "paint0_angular_2058_937");
    radialGradient.setAttribute("cx", "0");
    radialGradient.setAttribute("cy", "0");
    radialGradient.setAttribute("r", "1");
    radialGradient.setAttribute("gradientUnits", "userSpaceOnUse");
    radialGradient.setAttribute("gradientTransform", "translate(731.625 289.6) rotate(40.6013) scale(70.2626)");
    defs.appendChild(radialGradient);

    let stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop1.setAttribute("offset", "0.095");
    stop1.setAttribute("stop-color", "#0B0C0B");
    radialGradient.appendChild(stop1);

    let stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop2.setAttribute("offset", "0.525");
    stop2.setAttribute("stop-color", "#656566");
    radialGradient.appendChild(stop2);

    let stop3 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop3.setAttribute("offset", "0.73");
    stop3.setAttribute("stop-color", "#F2F2F0");
    radialGradient.appendChild(stop3);

    return svgElement;
};

export const MachoOvinoCaprinoSVG = (text, uploadedFile, initialNumber, typeRecording) => {
    // Criar o elemento SVG
    let svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttribute("width", "1448");
    svgElement.setAttribute("height", "1357");
    svgElement.setAttribute("viewBox", "0 0 1448 1357");
    svgElement.setAttribute("fill", "none");

    // Path 1
    let path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute("d", "M724 0V1021.22V1356.55H76.2105C21.3389 1338.26 2.54035 1293.04 0 1272.72V1021.22L724 0Z");
    path1.setAttribute("fill", "#EEEE22");
    svgElement.appendChild(path1);

    // Path 2
    let path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2.setAttribute("d", "M724 0V1021.22V1356.55H1371.79C1426.66 1338.26 1445.46 1293.04 1448 1272.72V1021.22L724 0Z");
    path2.setAttribute("fill", "#EEEE22");
    svgElement.appendChild(path2);

    // Grupo 1
    let group1 = document.createElementNS("http://www.w3.org/2000/svg", "g");
    let circle1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle1.setAttribute("cx", "731.623");
    circle1.setAttribute("cy", "289.6");
    circle1.setAttribute("r", "289.6");
    circle1.setAttribute("fill", "#EEEE22");
    group1.appendChild(circle1);
    svgElement.appendChild(group1);

    // Grupo 2
    let group2 = document.createElementNS("http://www.w3.org/2000/svg", "g");
    let circle2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle2.setAttribute("cx", "731.624");
    circle2.setAttribute("cy", "289.6");
    circle2.setAttribute("r", "259.116");
    circle2.setAttribute("fill", "#EEEE22");
    group2.appendChild(circle2);
    svgElement.appendChild(group2);

    // Grupo 3
    let group3 = document.createElementNS("http://www.w3.org/2000/svg", "g");
    let circle3 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle3.setAttribute("cx", "731.625");
    circle3.setAttribute("cy", "289.6");
    circle3.setAttribute("r", "76.2105");
    circle3.setAttribute("fill", "url(#paint0_angular_2058_946)");
    group3.appendChild(circle3);
    svgElement.appendChild(group3);

    // Adicionar texto e imagem com base na condição
    if (typeRecording != '' && typeRecording != 5 && typeRecording == 4) {
        // Criar foreignObject
        let foreignObject = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        foreignObject.setAttribute("x", "0");
        foreignObject.setAttribute("y", "0");
        foreignObject.setAttribute("width", "100%");
        foreignObject.setAttribute("height", "100%");

        // Criar div dentro do foreignObject
        let div = document.createElement("div");
        div.style.width = "100%";
        div.style.height = "100%";
        div.style.display = "flex";
        div.style.alignItems = "center";
        div.style.justifyContent = "center";
        div.style.textAlign = "center";

        // Adicionar texto ao div
        let textElement = document.createElement("span");
        textElement.textContent = text;
        textElement.style.fill = "black";
        textElement.style.fontWeight = "bold";
        textElement.style.fontSize = "96px";
        textElement.id = "textoCurvado"; // Adicionar o ID
        div.appendChild(textElement);

        // Adicionar div ao foreignObject
        foreignObject.appendChild(div);

        // Adicionar foreignObject ao SVG
        svgElement.appendChild(foreignObject);

        // Adicionar número inicial ao SVG
        let text2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text2.setAttribute("x", "50%");
        text2.setAttribute("y", "85%");
        text2.setAttribute("dominant-baseline", "middle");
        text2.setAttribute("text-anchor", "middle");
        text2.setAttribute("fill", "black");
        text2.setAttribute("font-weight", "bold");
        text2.setAttribute("font-size", "650");
        text2.textContent = initialNumber;
        svgElement.appendChild(text2);

        // Adicionar imagem ao SVG
        if (uploadedFile) {
            let image = document.createElementNS("http://www.w3.org/2000/svg", "image");
            image.setAttribute("x", "42%");
            image.setAttribute("y", "42%");
            image.setAttribute("width", "280px");
            image.setAttribute("height", "280px");
            image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", uploadedFile);
            svgElement.appendChild(image);
        }
    }

    // Adicionar as definições de gradiente
    let defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    svgElement.appendChild(defs);

    let radialGradient = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient");
    radialGradient.setAttribute("id", "paint0_angular_2058_946");
    radialGradient.setAttribute("cx", "0");
    radialGradient.setAttribute("cy", "0");
    radialGradient.setAttribute("r", "1");
    radialGradient.setAttribute("gradientUnits", "userSpaceOnUse");
    radialGradient.setAttribute("gradientTransform", "translate(731.625 289.6) rotate(40.6013) scale(70.2626)");
    defs.appendChild(radialGradient);

    let stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop1.setAttribute("offset", "0.095");
    stop1.setAttribute("stop-color", "#0B0C0B");
    radialGradient.appendChild(stop1);

    let stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop2.setAttribute("offset", "0.525");
    stop2.setAttribute("stop-color", "#656566");
    radialGradient.appendChild(stop2);

    let stop3 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop3.setAttribute("offset", "0.73");
    stop3.setAttribute("stop-color", "#F2F2F0");
    radialGradient.appendChild(stop3);

    return svgElement;
};

export const MachoPequenoSVG = (text, uploadedFile, initialNumber, typeRecording) => {
    // Criar o elemento SVG
    let svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttribute("width", "587");
    svgElement.setAttribute("height", "587");
    svgElement.setAttribute("viewBox", "0 0 587 587");
    svgElement.setAttribute("fill", "none");

    // Grupo 1
    let group1 = document.createElementNS("http://www.w3.org/2000/svg", "g");
    let circle1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle1.setAttribute("cx", "293.5");
    circle1.setAttribute("cy", "289.5");
    circle1.setAttribute("r", "289.5");
    circle1.setAttribute("fill", "#EEEE22");
    group1.appendChild(circle1);
    svgElement.appendChild(group1);

    // Grupo 2
    let group2 = document.createElementNS("http://www.w3.org/2000/svg", "g");
    let circle2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle2.setAttribute("cx", "293.503");
    circle2.setAttribute("cy", "289.5");
    circle2.setAttribute("r", "259.026");
    circle2.setAttribute("fill", "#EEEE22");
    group2.appendChild(circle2);
    svgElement.appendChild(group2);

    // Grupo 3
    let group3 = document.createElementNS("http://www.w3.org/2000/svg", "g");
    let circle3 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle3.setAttribute("cx", "293.497");
    circle3.setAttribute("cy", "289.5");
    circle3.setAttribute("r", "76.1842");
    circle3.setAttribute("fill", "url(#paint0_angular_2058_936)");
    group3.appendChild(circle3);
    svgElement.appendChild(group3);

    // Adicionar texto com base na condição
    if (typeRecording != '' && typeRecording != 5 && typeRecording == 4) {
        // Criar foreignObject
        let foreignObject = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        foreignObject.setAttribute("x", "0");
        foreignObject.setAttribute("y", "0");
        foreignObject.setAttribute("width", "100%");
        foreignObject.setAttribute("height", "100%");

        // Criar div dentro do foreignObject
        let div = document.createElement("div");
        div.style.position = "absolute";
        div.style.top = "60px";
        div.style.width = "100%";
        div.style.display = "flex";
        div.style.justifyContent = "center";

        // Adicionar texto ao div
        let textElement = document.createElement("span");
        textElement.textContent = text;
        textElement.style.fill = "black";
        textElement.style.fontWeight = "bold";
        textElement.style.fontSize = "45px";
        textElement.id = "textoCurvado"; // Adicionar o ID
        div.appendChild(textElement);

        // Adicionar div ao foreignObject
        foreignObject.appendChild(div);

        // Adicionar foreignObject ao SVG
        svgElement.appendChild(foreignObject);

        // Adicionar número inicial ao SVG
        let text2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text2.setAttribute("x", "50%");
        text2.setAttribute("y", "83%");
        text2.setAttribute("dominant-baseline", "middle");
        text2.setAttribute("text-anchor", "middle");
        text2.setAttribute("fill", "black");
        text2.setAttribute("font-weight", "bold");
        text2.setAttribute("font-size", "90");
        text2.textContent = initialNumber;
        svgElement.appendChild(text2);
    }

    // Adicionar as definições de gradiente
    let defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    svgElement.appendChild(defs);

    let radialGradient = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient");
    radialGradient.setAttribute("id", "paint0_angular_2058_936");
    radialGradient.setAttribute("cx", "0");
    radialGradient.setAttribute("cy", "0");
    radialGradient.setAttribute("r", "1");
    radialGradient.setAttribute("gradientUnits", "userSpaceOnUse");
    radialGradient.setAttribute("gradientTransform", "translate(293.497 289.5) rotate(40.6013) scale(70.2384)");
    defs.appendChild(radialGradient);

    let stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop1.setAttribute("offset", "0.095");
    stop1.setAttribute("stop-color", "#0B0C0B");
    radialGradient.appendChild(stop1);

    let stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop2.setAttribute("offset", "0.525");
    stop2.setAttribute("stop-color", "#656566");
    radialGradient.appendChild(stop2);

    let stop3 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop3.setAttribute("offset", "0.73");
    stop3.setAttribute("stop-color", "#F2F2F0");
    radialGradient.appendChild(stop3);

    return svgElement;
};

export const MachoTipTagSVG = (text, uploadedFile, initialNumber, typeRecording) => {
    // Criar o elemento SVG
    let svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttribute("width", "1448");
    svgElement.setAttribute("height", "409");
    svgElement.setAttribute("viewBox", "0 0 1448 409");
    svgElement.setAttribute("fill", "none");

    // Adicionar retângulos
    let rect1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect1.setAttribute("x", "749.555");
    rect1.setAttribute("y", "221.463");
    rect1.setAttribute("width", "698.447");
    rect1.setAttribute("height", "187.388");
    rect1.setAttribute("rx", "22");
    rect1.setAttribute("fill", "#EEEE22");
    svgElement.appendChild(rect1);

    let rect2 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect2.setAttribute("x", "681.414");
    rect2.setAttribute("y", "272.568");
    rect2.setAttribute("width", "85.1764");
    rect2.setAttribute("height", "68.1411");
    rect2.setAttribute("fill", "#EEEE22");
    svgElement.appendChild(rect2);

    let rect3 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect3.setAttribute("x", "17.0391");
    rect3.setAttribute("y", "221.463");
    rect3.setAttribute("width", "698.447");
    rect3.setAttribute("height", "187.388");
    rect3.setAttribute("rx", "20");
    rect3.setAttribute("fill", "#EEEE22");
    svgElement.appendChild(rect3);

    // Adicionar caminho e círculos
    let path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute("d", "M60.1484 133.758L142.423 111.713L184.309 268.033C190.396 290.753 176.914 314.105 154.194 320.193V320.193C131.475 326.281 108.122 312.798 102.034 290.079L60.1484 133.758Z");
    path1.setAttribute("fill", "#EEEE22");
    svgElement.appendChild(path1);

    let circle1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle1.setAttribute("cx", "104.94");
    circle1.setAttribute("cy", "141.856");
    circle1.setAttribute("r", "63.7462");
    circle1.setAttribute("transform", "rotate(-20.9343 104.94 141.856)");
    circle1.setAttribute("fill", "#EEEE22");
    svgElement.appendChild(circle1);

    let path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2.setAttribute("d", "M59.5384 22.7764L145.265 92.359L42.1411 131.809L59.5384 22.7764Z");
    path2.setAttribute("fill", "#EEEE22");
    svgElement.appendChild(path2);

    let circle2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle2.setAttribute("cx", "1354.3");
    circle2.setAttribute("cy", "315.157");
    circle2.setAttribute("r", "59.6235");
    circle2.setAttribute("fill", "white");
    svgElement.appendChild(circle2);

    // Adicionar texto curvado
    let textPath = document.createElementNS("http://www.w3.org/2000/svg", "textPath");
    textPath.setAttribute("href", "#curve");
    textPath.textContent = text;

    let textElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
    textElement.setAttribute("x", "50%");
    textElement.setAttribute("y", "80%");
    textElement.setAttribute("dominant-baseline", "middle");
    textElement.setAttribute("text-anchor", "middle");
    textElement.setAttribute("fill", "black");
    textElement.setAttribute("font-weight", "bold");
    textElement.setAttribute("font-size", "180");
    textElement.id = "textoCurvado"; // Adicionar o ID
    textElement.appendChild(textPath);
    svgElement.appendChild(textElement);

    // Adicionar número inicial ao SVG
    if (typeRecording != '' && typeRecording != 5) {
        let text2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text2.setAttribute("x", "25%");
        text2.setAttribute("y", "80%");
        text2.setAttribute("dominant-baseline", "middle");
        text2.setAttribute("text-anchor", "middle");
        text2.setAttribute("fill", "black");
        text2.setAttribute("font-weight", "bold");
        text2.setAttribute("font-size", "180");
        text2.textContent = initialNumber;
        svgElement.appendChild(text2);
    }

    // Adicionar as definições de filtro
    let defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    svgElement.appendChild(defs);

    let filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
    filter.setAttribute("id", "filter0_d_2058_949");
    filter.setAttribute("x", "40.1797");
    filter.setAttribute("y", "22.7773");
    filter.setAttribute("width", "146.594");
    filter.setAttribute("height", "300.877");
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
    feOffset.setAttribute("dy", "1");
    filter.appendChild(feOffset);

    let feGaussianBlur = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
    feGaussianBlur.setAttribute("stdDeviation", "0.5");
    filter.appendChild(feGaussianBlur);

    let feComposite = document.createElementNS("http://www.w3.org/2000/svg", "feComposite");
    feComposite.setAttribute("in2", "hardAlpha");
    feComposite.setAttribute("operator", "out");
    filter.appendChild(feComposite);

    let feColorMatrix2 = document.createElementNS("http://www.w3.org/2000/svg", "feColorMatrix");
    feColorMatrix2.setAttribute("type", "matrix");
    feColorMatrix2.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.19 0");
    filter.appendChild(feColorMatrix2);

    let feBlend = document.createElementNS("http://www.w3.org/2000/svg", "feBlend");
    feBlend.setAttribute("mode", "normal");
    feBlend.setAttribute("in2", "BackgroundImageFix");
    filter.appendChild(feBlend);

    let feBlend2 = document.createElementNS("http://www.w3.org/2000/svg", "feBlend");
    feBlend2.setAttribute("mode", "normal");
    feBlend2.setAttribute("in", "SourceGraphic");
    feBlend2.setAttribute("in2", "effect1_dropShadow_2058_949");
    feBlend2.setAttribute("result", "shape");
    filter.appendChild(feBlend2);

    return svgElement;
};