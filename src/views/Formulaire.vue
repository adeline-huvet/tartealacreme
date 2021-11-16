
<template>
    <div>
        <h1>Le formulaire</h1>

        <FormulateForm v-model="initialValues">
 
       <FormulateInput type="text"
                       name="name"
                       label="Your name ?"
                       validation="required"
                       />
        <FormulateInput type="text"
        name="age"
        label="Your age ?"
        validation="required|number|max:3"
       />

        <FormulateInput
        type="submit"
        label="Sign up"/>
        
        </FormulateForm>

    </div>
</template>

<script>

export default { 
    name: 'Fomulaire',
    data(){
        return{
            initialValues: {
                name:'',
                age: '',
            }
        }
    }
}
</script>

<style scoped>

</style>