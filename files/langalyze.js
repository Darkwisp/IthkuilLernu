function sentence(trans){
	var self =  this
	this.words = []
	this.totText = []
  this.trans = trans
  
  this.addWord = function(trans, ret){
  	var newWord = new word(trans)
    self.words.push(newWord)
    
    if (ret){
    	return newWord
    }
  }
  
  this.pushAffix = function(txt, trans, ret){
  	var newAffix = new affix(txt, trans)
    var closestWord = self.words[self.words.length - 1]
    closestWord.affixes.push(newAffix)
  }
  
  this.pushComponent = function(abv, trans, ret){
  	var newComponent = new component(abv, trans)
    var closestWord = self.words[self.words.length - 1]
    var closestAffix = closestWord.affixes[closestWord.affixes.length - 1]
    closestAffix.components.push(newComponent)
  }
  
  this.parse = function(){
  self.totText = []
    
  	for (var w in self.words){
    	self.words[w].parse()
    	self.totText.push(self.words[w].text.join(''))
    }
  }
  
}

function word(trans){
	var self =  this
	this.affixes = []
	this.text = []
  this.trans = trans
  
  this.addAffix = function(txt, trans, ret){
  	var newAffix = new affix(txt, trans)
    self.affixes.push(newAffix)
    
    if (ret){
    	return newAffix
    }
  }
  
  this.parse = function(){
  self.text = []
  
  	for (var a in self.affixes){
    	self.text.push(self.affixes[a].text)
    }
  }
  
}

function affix(txt, trans){
	var self =  this
	this.components = []
	this.text = txt
  this.trans = trans
  
  this.addComponent = function(abv, trans, ret){
  	var newComponent = new component(abv, trans)
    self.components.push(newComponent)
    
    if (ret){
    	return newComponent
    }
  }
  
}

function component(abv, trans){
	this.abv = abv
  this.trans = trans
}