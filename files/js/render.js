function init(sentences){
	
  for (s in sentences){
    var para = document.createElement("div");
    para.id = "sentence"
    para.className = "tooltip"
    
    //Add tooltip that shows sentence translation
    var tooltip = document.createElement("span");
    tooltip.className = "tooltiptext"
    var tooltext = document.createTextNode(sentences[s].trans);
    
    tooltip.appendChild(tooltext)
    para.appendChild(tooltip)
    
    //Loop through words
    for(w in sentences[s].words){
    
    //Add wordblock for each word that you can hover over
    	var wordBlock = document.createElement("span")
      wordBlock.id = "word"
      
      //Add tooltip for word translation
      var tooltip = document.createElement("span");
      tooltip.className = "wordtooltiptext"
      
       var tooltext = document.createElement("span");
        tooltext.id = "afftip"
    var tooltextText = document.createTextNode(sentences[s].words[w].trans);
    tooltext.appendChild(tooltextText)
      
      var afftip = document.createElement("span");
    	afftip.className = "afftooltiptext"
      
      for (a in sentences[s].words[w].affixes){
      	var affspan = document.createElement("span");
        affspan.id = "afftext"
        
      	var afftext = document.createTextNode(sentences[s].words[w].affixes[a].text + " - " + sentences[s].words[w].affixes[a].trans);
        
        if (a > 0){
        var formtext = document.createTextNode(" + ")
       		afftip.appendChild(formtext)
        }
        
      	affspan.appendChild(afftext)
        afftip.appendChild(affspan)
        
        var comptip = document.createElement("span");
        comptip.className = "comptooltiptext"
        var comptab = document.createElement("TABLE");
        var comprow1 = document.createElement("TR");
        
        var compcelltitle1 = document.createElement("TH"); 
        var t = document.createTextNode("Abbreviation");
		compcelltitle1.style.color = "white"
        compcelltitle1.appendChild(t)
        
        comprow1.appendChild(compcelltitle1)
        
        for (c in sentences[s].words[w].affixes[a].components){
        	var compcell = document.createElement("TD");
          var t = document.createTextNode(sentences[s].words[w].affixes[a].components[c].abv);
			compcell.style.color = "white"
          compcell.appendChild(t)
          
          comprow1.appendChild(compcell)
        }
        var comprow2 = document.createElement("TR");
        
        var compcelltitle2 = document.createElement("TH"); 
        var t = document.createTextNode("Meaning");
		compcelltitle2.style.color = "white"
        compcelltitle2.appendChild(t)
        
        comprow2.appendChild(compcelltitle2)
        
        for (c in sentences[s].words[w].affixes[a].components){
        	var compcell = document.createElement("TD");
          var t = document.createTextNode(sentences[s].words[w].affixes[a].components[c].trans);
          compcell.appendChild(t)
          compcell.style.color = "white"
          comprow2.appendChild(compcell)
        }
        
        
        
        comptab.appendChild(comprow1)
        comptab.appendChild(comprow2)
        comptip.appendChild(comptab)
        affspan.appendChild(comptip)
        
      }
      
    	tooltip.appendChild(tooltext)
      
      //Add tooltip of everything
      tooltext.appendChild(afftip)
      wordBlock.appendChild(tooltip)
    	
    
    	var t = document.createTextNode(sentences[s].words[w].text.join('') + " ");
      
      t.id = "affText"
    	wordBlock.appendChild(t);
      
      para.appendChild(wordBlock)
      
    }
    
    document.body.appendChild(para);     
  }
}