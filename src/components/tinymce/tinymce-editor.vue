<template >
  <div >
		<editor v-model="myValue" :init="init" :disabled="disabled" @onClick="handleTinymceClick" ></editor>
	</div>
</template>
<script type="text/ecmascript-6" >
	import tinymce from 'tinymce/tinymce'
	import Editor from '@tinymce/tinymce-vue'
	import 'tinymce/themes/silver/theme'


	export default {
		props: {
			disabled: {
				type: Boolean, 
				default: false
			},
			value: {
				type: String,
				default: ''
			},
			plugins: {
				type: [String, Array],
				default: 'advlist anchor autolink autosave code codesample colorpicker contextmenu directionality emoticons fullscreen hr image imagetools importcss insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount'
			},
			toolbar: {
				type: [String, Array],
				default:() =>['searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample', 'hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen'],
			}
		},
		data() {
			return {
				init: {
					language_url: '/static/tinymce/langs/zh_CN.js', //语言包地址
					language: 'zh_CN', //语言
					skin_url: '/static/tinymce/skins/ui/oxide',
					height: 500,
					convert_urls: false,
					plugins: this.plugins,
					toolbar: this.toolbar,
					images_upload_handler: (blobInfo, success, failure) => {
						const img = 'data:image/jpeg;base64,' + blobInfo.base64()
						success(img)
					}
				},
				myValue: this.value
			}
		},
		methods: {
			handleTinymceClick() {
				//TO DO
				console.log('tinymce click')
			}
		},
		mounted() {
			tinymce.init({theme: 'silver',skin: 'oxide'})
		},
		components: {
			Editor
		},
		watch: {
			value(newVal) {
				this.myValue = newVal
			},
			myValue(newVal) {
				this.$emit('input', newVal)
			}
		}
	}
</script>
<style scoped ></style>
