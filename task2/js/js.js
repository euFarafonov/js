function Filter(options){
	let filter = document.getElementById(options.filterId);
	this.createForm(filter, options.selectData);
	
	let dataStorage = JSON.parse(localStorage.getItem("data"));
    
	if (dataStorage) {
		this.render(dataStorage);
        
		let inputVal = localStorage.getItem("input");
		let selectVal = localStorage.getItem("select");
		
		if (inputVal) {
			filter.querySelector('.input').value = inputVal;
		}
		
		if (selectVal) {
			filter.querySelector('.select').value = selectVal;
		}
	}
    
    let self = this;
    
	filter.addEventListener('click', function(event){
		let target = event.target;
		
		if (target.classList.contains('btn')) {
			event.preventDefault();
			
			let inputVal = filter.querySelector('.input').value;
			let selectVal = filter.querySelector('.select').value;
			
			self.getData(selectVal, inputVal);
		}
	});
}
 
Filter.prototype.createForm = function(parent, selectData) {
	let input = document.createElement('input');
	let sel = document.createElement('select');
	let btn = document.createElement('button');
	
	input.classList.add('input');
	input.type = 'text';
	input.name = 'in';
	
	sel.classList.add('select');
	sel.name = 'sel';
	let len = selectData.length;
	for (let i = 0; i < len; i++) {
		let opt = document.createElement('option');
		opt.textContent = selectData[i];
		opt.classList.add('option');
		sel.appendChild(opt);
	}
	
	btn.classList.add('btn');
	btn.textContent = 'filter';
	btn.type = 'button';
	
	parent.appendChild(input);
	parent.appendChild(sel);
	parent.appendChild(btn);
}

Filter.prototype.getData = function(selectVal, inputVal) {
	let server = 'http://jsonplaceholder.typicode.com/';
	
	if (selectVal) {
		server += selectVal;
		
		if (inputVal) {
			server += '/' + inputVal;
		}
	}
    
    let self = this;
    
	fetch(server)
		.then(function(response) {
            return response.json();
		})
		.then(function(response) {
            localStorage.setItem("data", JSON.stringify(response));
            localStorage.setItem("select", selectVal);
            localStorage.setItem("input", inputVal);
            self.render(response);
		})
		.catch(function() {
			console.log('error request')
		});
}

Filter.prototype.render = function(data) {
	let table = document.getElementById('table');
	table.innerHTML = '';
	let headers = (data instanceof Array) ? Object.keys(data[0]) : Object.keys(data);
	
	this.printHeader(table, headers);
	this.printBody(table, headers, data);
}

Filter.prototype.printHeader = function(table, headers) {
	this.pasteRow(table, headers, false);
}

Filter.prototype.printBody = function(table, headers, data) {
	if (data instanceof Array) {
		let len = data.length;
		
		for (let i = 0; i < len; i++) {
			this.pasteRow(table, headers, data[i]);
		}
	} else {
		this.pasteRow(table, headers, data);
	}
}

Filter.prototype.pasteRow = function(table, headers, data) {
	let col = headers.length;
	let tr = document.createElement('tr');
	
	for (let i = 0; i < col; i++) {
		let content = (data) ? data[headers[i]] : headers[i];
		this.pasteTd(tr, content);
	}
	table.appendChild(tr);
}

Filter.prototype.pasteTd = function(tr, content) {
	let td = document.createElement('td');
	
	if (content instanceof Object) {
		let ul = document.createElement('ul');
		for (key in content) {
			let li = document.createElement('li');
			if (content[key] instanceof Object) {
				let div = document.createElement('div');
				div.textContent = key + ':';
				
				let inner = content[key];
				let ul2 = document.createElement('ul');
				for (key2 in inner) {
					let li2 = document.createElement('li');
					li2.textContent = key2 + ': ' + inner[key2];
					ul2.appendChild(li2);
				}
				li.appendChild(div);
				li.appendChild(ul2);
			} else {
				li.textContent = key + ': ' + content[key];
			}
			ul.appendChild(li);
		}
		td.appendChild(ul);
	} else {
		td.textContent = content;
	}
	tr.appendChild(td);
}