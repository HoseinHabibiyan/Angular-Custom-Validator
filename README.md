you can use validator in form group like this 

for example use persian Char Validator on title control :

 this.formGroup = this.fb.group({
      title: [
						this.model.title,
						[Validators.required,
						Validators.minLength(3), 
						Validators.maxLength(50),
						persianCharValidator()]
      ]
 })
