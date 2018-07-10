export class EventManager {
    constructor() {
        if (EventManager.instance) return EventManager.instance;
        EventManager.instance = this;
        this.events = {};
    }
    
    addListener(event, func) {
        if (!this.events[event]) this.events[event] = [];
        this.events[event].push(func);
    }
    
    dispatch(event, data) {
        let obj = this.events[event];
        let len = obj.length;
        
        obj.forEach(function(func) {
            func(data);
        });
    }
    
    removeListener(event) {
        this.events[event] = [];
    }
}