//Надо реализовать логику, которая позволит нам подписываться на наши кастомные события, и в будуще вызывать их.
//Пример использования:

const eventManager = new EventManager();

eventManager.addListener('moe luboe sobitie', function (data) {
    console.log('first function: ', data);
});
eventManager.addListener('moe luboe sobitie', function (data) {
    console.log('second function: ', data);
});

eventManager.dispatch('moe luboe sobitie', data); // должно вызвать две верхние функции

//Добавить возможность удалять события (очищать все функции).
//Сделать EventManager синглтоном.
//Сделать у EventManager публичным методы и свойства только addListener, dispatch, removeListener.