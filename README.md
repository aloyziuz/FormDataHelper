# Form Data Helper

This project is used to create a form data object from any js object

## How to Use
You can install the package using:
```npm i @aloysius-software-factory/form-data-helper```

Then, in your code simply import the ToFormData function
```
import { ToFormData } from '@aloysius-software-factory/form-data-helper';
```

ToFormData function accepts 3 arguments: 
1. your input object
2. includeNullValues - boolean; `true` if you want your null values to be included. `false` if you want to exclude all null attributes 
3. includeUndefinedValues - boolean; works the same as `includeNullValues` but for undefined values

ToFormData will get all attributes of input object by using `hasOwnProperty()` and iterate them. Any non-string or blob or blob arrays will be stringified using `JSON.stringify()`. 