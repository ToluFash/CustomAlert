
class Modalize{
    constructor(){

        //StyleSheet Init
        if (document.styleSheets[0])
            this.styleSheet = document.styleSheets[0];
        else{
            document.head.appendChild(document.createElement('style'));
            this.styleSheet =document.styleSheets[0]
        }

        //Elements Init
        this.topDiv = document.createElement('div');
        this.innerDiv = document.createElement('div');
        this.closeButton = document.createElement('div');
        //Rules Init
        document.styleSheets[0].addRule('.topModal');
        document.styleSheets[0].addRule('.topModal2');
        document.styleSheets[0].addRule('.innerModal');
        document.styleSheets[0].addRule('.buttonModal');
        this.topstyle = document.styleSheets[0].cssRules[document.styleSheets[0].cssRules.length - 4].style;
        this.topstyle2 = document.styleSheets[0].cssRules[document.styleSheets[0].cssRules.length - 3].style;
        this.innerStyle = document.styleSheets[0].cssRules[document.styleSheets[0].cssRules.length - 2].style;
        this.buttonStyle = document.styleSheets[0].cssRules[document.styleSheets[0].cssRules.length - 1].style;
        document.styleSheets[0].insertRule(".buttonModal:hover { color: black }");

        //Style Init
        /* Top Style */
        this.topstyle['position'] ="fixed";
        this.topstyle['z-index'] ="1";
        this.topstyle['padding-top'] ="100px";
        this.topstyle['left'] = "0";
        this.topstyle['top'] ="0";
        this.topstyle['width'] ="0%";
        this.topstyle['height'] ="0%";
        this.topstyle['overflow'] ="auto";
        this.topstyle['background-color'] ="rgb(0,0,0)";
        this.topstyle['background-color'] = "rgba(0,0,0,0.2)";
        this.topstyle.transition ="width 0.5s ease-in-out, height 0.5s";
        /* Top Style2 */
        this.topstyle2['position'] ="fixed";
        this.topstyle2['z-index'] ="1";
        this.topstyle2['padding-top'] ="100px";
        this.topstyle2['left'] = "0";
        this.topstyle2['top'] ="0";
        this.topstyle2['width'] ="100%";
        this.topstyle2['height'] ="100%";
        this.topstyle2['overflow'] ="auto";
        this.topstyle2['background-color'] ="rgb(0,0,0)";
        this.topstyle2['background-color'] = "rgba(0,0,0,0.2)";
        this.topstyle.transition = "width 0.1s ease-in-out, height 0.1s";
        /* Inner Style */
        this.innerStyle['display'] = 'none';
        this.topstyle2['z-index'] ="2";
        this.innerStyle['width'] = '85%';
        this.innerStyle['borderWidth'] = '1px';
        this.innerStyle['padding'] = '1%';
        this.innerStyle['borderRadius'] = '5px';
        this.innerStyle['position'] = 'fixed';
        this.innerStyle['left'] = '5%';
        this.innerStyle['top'] = '30%';
        this.innerStyle['zIndex'] = '100';
        this.innerStyle['overflow'] = 'hidden';
        this.innerStyle['word-break'] = 'break-word';
        /* Button Style */
        this.closeButton.innerText = 'x';
        this.closeButton.addEventListener('click', ()=>{this.topDiv.className = "topModal"; this.innerStyle['display'] = 'none'; });
        this.buttonStyle.width= "0px";
        this.buttonStyle.height= "0px";
        this.buttonStyle.position= "absolute";
        this.buttonStyle.left= "98.2%";
        this.buttonStyle.bottom= "100%";
        this.buttonStyle.cursor= "pointer";
        this.buttonStyle.color= "#940201";

        //Class Init
        this.topDiv.classList.add('topModal');
        this.innerDiv.classList.add('innerModal');
        this.closeButton.classList.add('buttonModal');

        //DOM Init
        document.body.appendChild(this.topDiv);
        this.topDiv.appendChild(this.innerDiv);

    }
    alert(textContent, bgColor, textColor, font){
        this.innerStyle.backgroundColor = bgColor? bgColor :'#dfe2e2';
        this.innerStyle.color = textColor ? textColor: '';
        this.innerStyle.font = font ? font : 'small Arial';
        this.innerDiv.innerHTML = textContent;
        this.innerDiv.appendChild(this.closeButton);
        this.topDiv.className = "topModal2";
        this.innerStyle['display'] = 'block';
    }
}





let modal = new Modalize();
function modalize(textContent,bgColor, textColor, font){
    modal.alert(textContent,bgColor, textColor, font)
}