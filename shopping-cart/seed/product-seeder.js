var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/51K1cmq6UdL.jpg',
        title: 'Web Application',
        description: 'Web applications are the front door to most organizations, exposing them to attacks that may disclose personal information, execute fraudulent transactions, or compromise ordinary users. This practical book has been completely updated and revised to discuss the latest step-by-step.',
        price: 35
    }),
    new Product({
        imagePath: 'https://media.wiley.com/product_data/coverImage300/91/11186620/1118662091.jpg',
        title: 'Browser',
        description: 'The Browser Hacker\'s Handbook gives a practical understanding of hacking the everyday web browser and using it as a beachhead to launch further attacks deep into corporate networks. Written by a team of highly experienced computer security experts, the handbook provides hands-on tutorials exploring a range of current attack methods.',
        price: 45
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/51K1cmq6UdL.jpg',
        title: 'Android',
        description: 'As the Android operating system continues to increase its share of the smartphone market, smartphone hacking remains a growing threat. Written by experts who rank among the world\'s foremost Android security researchers, this book presents vulnerability discovery, analysis, and exploitation tools for the good guys.',
        price: 40
    }),
    new Product({
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_QQlIzpGfM2tnr7dQkWorHWoVTZGs_Chimq3qkuHiqrnqGZSv',
        title: 'IOS',
        description: 'iOS is Apple\'s mobile operating system for the iPhone and iPad. With the introduction of iOS5, many security issues have come to light. This book explains and discusses them all. The award-winning author team, experts in Mac and iOS security, examines the vulnerabilities and the internals of iOS to show how attacks can be mitigated.',
        price: 15
    }),
    new Product({
        imagePath: 'https://media.wiley.com/product_data/coverImage300/00/11189585/1118958500.jpg',
        title: 'Mobile Application',
        description: 'The Mobile Application Hacker\'s Handbook is a comprehensive guide to securing all mobile applications by approaching the issue from a hacker\'s point of view. Heavily practical, this book provides expert guidance toward discovering and exploiting flaws in mobile applications on the iOS, Android, Blackberry, and Windows Phone platforms.',
        price: 40
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/51X7WCCdquL.jpg',
        title: 'Mac',
        description: 'Beginning with the core differences between Mac OS X and Windows or Linux, this book follows the steps an attacker would take. You will learn the tools needed to find vulnerabilities, the techniques used to exploit them, and the means by which attackers maintain control once they gain access. When you know how they get in, you\'ll know how to keep them out.',
        price: 30
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
