<template>

</template>

<script>
    import YnUpload from './yn-upload.vue';
    import UploadList from './uploadList.vue';
    export default {
        name: 'YnUpload',
        props: {
            defineClass: String,
            listType:{
                type:String,
                default: 'list-type'
            },
            onChange:{
                type: Function,
                default: null
            }
        },
        components:[YnUpload, UploadList],
        computed: {
            classLable: function () {
                return 'qdj-upload-' + this.showType;
            }
        },
        methods: {
            handleFileChange: function () {
                const fileDom = this.$refs.input;
                this.file = fileDom.files[0];
                let size = this.file.size;
                this.onChange && this.onChange(this.file, inputVule);

                console.log(size);
            }
        }
    }
</script>
