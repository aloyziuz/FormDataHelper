export function ToFormData<T>(args: T): FormData{
    const f = new FormData();
    let key: keyof T;
    for (key in args) {
        if (Object.prototype.hasOwnProperty.call(args, key)) {
            const value = args[key];
            //if value is blob or string, it can be directly inserted into formdata
            if(value instanceof Blob || typeof(value) === 'string'){
                f.append(key, value);
            }
            //if it is blob array
            else if(value instanceof Array && value[0] instanceof Blob){
                value.forEach(v => {
                    f.append(key.toString(), v);
                });
            }
            else{
                f.append(key, JSON.stringify(value));
            }
        }
    }
    return f;
}