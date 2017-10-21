<template>
    <div class="auth-layout">
        <div class="nav hidden-lg-up">
            <router-link class="i-vuestic" :to="{path: '/'}"></router-link>
        </div>
        <div class="main row">
            <div class="auth-content col-lg-6 col-12">
                <div class="login">
                    <h2>登录</h2>
                    <form name="login">
                        <div class="form-group">
                            <div class="input-group">
                                <input type="text" id="email" v-model="form.email" required="required"/>
                                <label class="control-label" for="email">帐号</label><i class="bar"></i>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <input type="password" v-model="form.password" id="password" required="required"/>
                                <label class="control-label" for="password">密码</label><i class="bar"></i>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <img :src="captchaSrc" @click="generateCaptcha"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <input type="text" v-model="form.captcha" id="captcha" required="required"/>
                                <label class="control-label" for="captcha">验证码</label><i
                                    class="bar"></i>
                            </div>
                        </div>
                        <div class="d-flex flex-column flex-lg-row align-items-center justify-content-between down-container">
                            <button class="btn btn-primary" @click.stop.prevent="doLogin">
                                登 录
                            </button>
                            <!--<router-link class='link' :to="{name: 'Signup'}">Create account</router-link>-->
                        </div>
                    </form>
                </div>
            </div>
            <div class="auth-wallpaper col-6 hidden-md-down">
                <div class="oblique"></div>
                <router-link class="i-vuestic" :to="{path: '/'}"></router-link>
            </div>
        </div>
    </div>

</template>

<script>
    import {systemLogin} from './../../../api/api';

    export default {
        data() {
            return {
                form: {
                    email: '',
                    password: '',
                    captcha:''
                },
                captchaSrc:''
            }
        },
        created(){
            this.generateCaptcha();
        },
        methods: {
            generateCaptcha() {
                this.captchaSrc = '/captcha/default?' + Math.random();
            },
            doLogin() {
                systemLogin(this.form).then((resp) => {
                    this.$router.push({name: 'home'});
                }).catch(()=>{
                    this.generateCaptcha();
                })
            }
        }
    }
</script>

<style lang="scss">
    @import '../../../../sass/variables';
    @import '~bootstrap/scss/mixins/breakpoints';
    @import '~bootstrap/scss/variables';

    .auth-layout {
        height: 100%;
        margin: 0;
        .nav {
            display: flex;
            align-items: center;
            justify-content: center;
            height: $top-mobile-nav-height;
            background-color: $top-nav-bg;
            .i-vuestic {
                height: $auth-mobile-nav-ivuestic-h;
                width: 100%;
            }
        }
        .main {
            margin: 0;
            height: 100%;
            .auth-content {
                padding: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: white;
            }
            .auth-wallpaper {
                background-color: $top-nav-bg;
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
                .i-vuestic {
                    z-index: 2;
                    height: $auth-wallpaper-ivuestic-h;
                    width: 100%;
                }
                .oblique {
                    position: absolute;
                    background-color: $auth-wallpaper-oblique-line;
                    left: calc(50% - 27% / 2);
                    transform: rotate(15deg);
                    width: 27%;
                    height: 115%;
                }
            }
        }

        @include media-breakpoint-down(md) {
            .main {
                height: $auth-mobile-main-h;
                .auth-content {
                    align-items: flex-start;
                    padding-top: $auth-content-padding-t;
                }
            }
        }
    }

    .login {
        @include media-breakpoint-down(md) {
            width: 100%;
            padding-right: 2rem;
            padding-left: 2rem;
            .down-container {
                .link {
                    margin-top: 2rem;
                }
            }
        }

        h2 {
            text-align: center;
        }
        width: 21.375rem;

        .down-container {
            margin-top: 3.125rem;
        }
    }
</style>
