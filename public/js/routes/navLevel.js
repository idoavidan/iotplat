const navLevel = {
	data (){
		return {
			rrrrrr:''
		}
	}, props: ['nav']
	, mounted(){
		// c(this.$props)
	}, methods : {
		showBtn(btn){
			return this.$props.nav.buttons.findIndex(o=>o.button===btn)!==-1
		}, disBtn(btn){
			var x = this.$props.nav.buttons.find(o=>o.button===btn);
			return x && x.status===false;
		}, compEvent(d){
			this.$emit('compEvent',d);
		}
	},template:
		`<nav class="level" >
			<div class="level-left">
				<div class="level-item" v-if="showBtn('left')">
					<button class="button is-link is-medium" @click="compEvent('left')" :disabled="disBtn('left')">
					<b-icon icon="arrow-left"></b-icon> <p>Back</p></button>
				</div>
				<div class="level-item" v-if="showBtn('save')">
					<button class="button is-dark is-medium" @click.prevent="compEvent('save')" :disabled="disBtn('save')">
						<b-icon icon="content-save"></b-icon> <p>Save</p></button>
					</div>
				<div class="level-item" v-if="showBtn('del')">
					<button class="button is-danger is-medium" hidden @click="compEvent('del')" :disabled="disBtn('del')">
					<b-icon icon="delete"></b-icon></button>
				</div>
			</div>
			{{nav.msg}}
			<div class="level-right">
				<div class="level-item" v-if="showBtn('right')">
					<button class="button is-link is-medium" @click="compEvent('right')" :disabled="disBtn('right')">
					Next<p></p> <b-icon icon="arrow-right"></b-icon></button>    
				</div>
			</div>
		</div>
	</nav>`
}