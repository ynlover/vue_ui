<template>
    <div class="qdj-upload" :class="[defineClass]">
        <input id="qdj-upload-checked" ref="input" type="file" class="qdj-upload-input" @change="handleFileChange">
        <label for="qdj-upload-checked" :class="classLable"></label>
    </div>
</template>

<script>
    export default {
        name: 'YnUpload',
        props: {
            defineClass: String,
            showType: {
                type: String,
                default: 'default'
            }
            ,
            checked: {
                type:Boolean,
                default: false
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

<style>
    .qdj-switch {

    }

    .qdj-switch-input {
        display: none;
    }

    .qdj-switch-default {
        position: relative;
        display: block;
        padding: 1px;
        border-radius: 24px;
        height: 24px;
        width: 50px;
        margin-bottom: 15px;
        background-color: #eee;
        cursor: pointer;
        vertical-align: top;
        -webkit-user-select: none;
    }

    .qdj-switch-default:before {
        content: '';
        display: block;
        border-radius: 24px;
        height: 24px;
        background-color: white;
        -webkit-transform: scale(1, 1);
        -webkit-transition: all 0.3s ease;
    }

    .qdj-switch-default:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -12px;
        margin-left: -12px;
        width: 24px;
        height: 24px;
        border-radius: 24px;
        background-color: white;
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.08);
        -webkit-transform: translateX(-13px);
        -webkit-transition: all 0.3s ease;
    }

    .qdj-switch-input:checked ~ label:after {
        -webkit-transform: translateX(13px);
    }

    .qdj-switch-input:checked ~ label:before {
        background-color: green;
    }
</style>
