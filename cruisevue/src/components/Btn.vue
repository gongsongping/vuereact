<template>
    <button :style="styles"> <slot></slot> </button>
</template>

<script>
export default { 
    name: 'Btn',
    props: ['color','square'],
    computed: {
        styles: function () {
            let deft = {
                height: '30px',
                border: 'none',
                width: this.square?'30px':'',
                lineHeight: this.square?'':'30px',
                fontSize: this.square?'18px':'14px',
                paddingLeft: this.square?'':'1em',
                paddingRight: this.square?'':'1em',
                color: 'white',
            }
            let color = ''
            switch (this.color) {
                case 'banana':
                    color = '#FF9A2A'
                    break;
                case 'leaf':
                    color = '#7FBC39'
                    break;
                case 'cyan':
                    color = '#00B4CF'
                    break;
                case 'deepcyan':
                    color = '#01869A'
                    break;
                case 'dark':
                    color = '#2D4054'
                    break;
                case 'lightdark':
                    color = '#435466'
                    break;
                case 'white':
                    color = 'white'
                    break;
                default:
                    color = '#E1E4E6'
                    break;
            }
            return Object.assign(deft, {background:color})
        }
    }
}
</script>

<style scoped>

</style>
