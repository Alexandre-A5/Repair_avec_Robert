

//
//img1

document.querySelector('.imgcard').addEventListener('mousemove', function(e) {
    var xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    var yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    this.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

document.querySelector('.imgcard').addEventListener('mouseenter', function() {
    this.style.transition = "none";
});

document.querySelector('.imgcard').addEventListener('mouseleave', function() {
    this.style.transition = "all 0.5s ease";
    this.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
//img1


//img2
document.querySelector('.imgcard2').addEventListener('mousemove', function(e) {
    var xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    var yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    this.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

document.querySelector('.imgcard2').addEventListener('mouseenter', function() {
    this.style.transition = "none";
});

document.querySelector('.imgcard2').addEventListener('mouseleave', function() {
    this.style.transition = "all 0.5s ease";
    this.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
//img2

//img3
document.querySelector('.imgcard3').addEventListener('mousemove', function(e) {
    var xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    var yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    this.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

document.querySelector('.imgcard3').addEventListener('mouseenter', function() {
    this.style.transition = "none";
});

document.querySelector('.imgcard3').addEventListener('mouseleave', function() {
    this.style.transition = "all 0.5s ease";
    this.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
//
//img3
//

var cursor = {
    delay: 5,
    _x: 0,
    _y: 0,
    endX: (window.innerWidth / 2),
    endY: (window.innerHeight / 2),
    cursorVisible: true,
    cursorEnlarged: false,
    $dot: document.querySelector('.cursor-dot'),
    $outline: document.querySelector('.cursor-dot-outline'),
    
    init: function() {
        // Set up element sizes
        this.dotSize = this.$dot.offsetWidth;
        this.outlineSize = this.$outline.offsetWidth;
        
        this.setupEventListeners();
        this.animateDotOutline();
    },
    
//     updateCursor: function(e) {
//         var self = this;
        
//         console.log(e)
        
//         // Show the cursor
//         self.cursorVisible = true;
//         self.toggleCursorVisibility();

//         // Position the dot
//         self.endX = e.pageX;
//         self.endY = e.pageY;
//         self.$dot.style.top = self.endY + 'px';
//         self.$dot.style.left = self.endX + 'px';
//     },
    
    setupEventListeners: function() {
        var self = this;
        
        // Anchor hovering
        document.querySelectorAll('a').forEach(function(el) {
            el.addEventListener('mouseover', function() {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
                self.toggleCursorOpacity();
            });
            el.addEventListener('mouseout', function() {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
                self.toggleCursorOpacity();
            });
        });
        
        // Click events
        document.addEventListener('mousedown', function() {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
        });
        document.addEventListener('mouseup', function() {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
        });
  
  
        document.addEventListener('mousemove', function(e) {
            // Show the cursor
            self.cursorVisible = true;
            self.toggleCursorVisibility();

            // Position the dot
            self.endX = e.pageX;
            self.endY = e.pageY;
            self.$dot.style.top = self.endY + 'px';
            self.$dot.style.left = self.endX + 'px';
        });
        
        // Hide/show cursor
        document.addEventListener('mouseenter', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
        });
        
        document.addEventListener('mouseleave', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
        });
    },
    
    animateDotOutline: function() {
        var self = this;
        
        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;
        self.$outline.style.top = self._y + 'px';
        self.$outline.style.left = self._x + 'px';
        
        requestAnimationFrame(this.animateDotOutline.bind(self));
    },
    
    toggleCursorSize: function() {
        var self = this;
        
        if (self.cursorEnlarged) {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(1.5)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        } else {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';

            self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    },

    toggleCursorOpacity: function(){
        var self=this;

        if (self.cursorEnlarged){
            self.$dot.style.opacity = 0.5
        }
        else{
            self.$dot.style.opacity = 1;
        }
    },
    
    toggleCursorVisibility: function() {
        var self = this;
        
        if (self.cursorVisible) {
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
        } else {
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
        }
    }
}

cursor.init();




document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner tous les boutons avec la classe 'colorToggleButton'
    const buttons = document.querySelectorAll('.button_marque');

    // Définir les couleurs
    const defaultColor = 'white';
    const newColor = 'black';

    // Ajouter un écouteur d'événement de clic à chaque bouton
    buttons.forEach(function(button) {
        // Définir la couleur de fond initiale
        button.style.backgroundColor = defaultColor;

        button.addEventListener('click', function() {
            // Basculer la couleur de fond
            if (button.style.backgroundColor === defaultColor) {
                button.style.backgroundColor = newColor;
                button.style.color = 'white';  // Optionnel, pour changer la couleur du texte
            } else {
                button.style.backgroundColor = defaultColor;
                button.style.color = 'black';  // Optionnel, pour revenir à la couleur du texte initiale
            }
        });
    });
});

// Sélection de toutes les cartes produits
const cartesProduit = document.querySelectorAll('.card_produit');

// Ajout d'un écouteur d'événements à chaque carte produit
cartesProduit.forEach(carte => {
    carte.addEventListener('click', () => {
        // Création d'un élément div pour la boîte modale
        const boiteModale = document.createElement('div');
        boiteModale.classList.add('boite_modale');
        
        // Copie du contenu de la carte cliquée dans la boîte modale
        const contenuCarte = carte.cloneNode(true);
        contenuCarte.classList.remove('card_produit');
        contenuCarte.classList.add('carte_modale');
        
        // Ajout de la carte clonée dans la boîte modale
        boiteModale.appendChild(contenuCarte);
        
        // Ajout de la boîte modale à la page
        document.body.appendChild(boiteModale);
        
        // Écouteur d'événements pour fermer la boîte modale en cliquant dessus
        boiteModale.addEventListener('click', () => {
            boiteModale.remove();
        });
    });
});
let timer;

window.addEventListener('scroll', () => {

    const boiteModale = document.querySelector('.boite_modale');
    if (boiteModale && !boiteModale.classList.contains('fermeture')) {
        // Utiliser un délai de 500 millisecondes (ajustable selon vos préférences)
        timer = setTimeout(() => {
            boiteModale.classList.add('fermeture');
            setTimeout(() => {
                boiteModale.remove();
            }, 500); // 500 ms, la même durée que l'animation CSS
        }, 500);
    }
});