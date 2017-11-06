<template>
    <ul class="qdj-upload-list" v-for="file in filesList">
        <li class="qdj-upload-list-item" >
            {{file.name}}
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'UploadList',
        props: {
            filesList: {
                type: Array,
                default:[]
            },
            showType:{
                type: String,
                default:''
            }
        },
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
