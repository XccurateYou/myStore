<template>
    <div class="form-box login">
        <form action="">
            <h2>Sign In</h2>

            <div class="input-box">
                <span class="icon">
                    <i class='bx bxs-user'></i>
                </span>
                <!-- required属性表示必须要这个input框的value -->
                <input type="text" required v-model="$store.state.userName">
                <label>UserName</label>
            </div>

            <div class="input-box">
                <span class="icon">
                    <i class='bx bxs-lock-alt'></i>
                </span>
                <!-- required属性表示必须要这个input框的value -->
                <input type="password" required v-model="$store.state.userPassword">
                <label>Password</label>
            </div>

            <div class="remember-forget">
                <label>
                    <input type="checkbox">Remember me
                </label>
                <a href="#">Forget password?</a>
            </div>

            <button type="submit" class="btn" @click.prevent="sendAxios">
                Sign In
            </button>

            <div class="login-register">
                <p>
                    Don't have an account?
                    <a href="#" class="register-link" @click="changeStyleLogin()">Sign up</a>
                </p>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
import router from '@/router'
export default {
    name: "logregboxFormLogin",
    methods: {
        changeStyleLogin() {
            this.$store.dispatch('change')
        },
        sendAxios() {
            axios({
                method: 'POST',
                url: 'http://10.129.152.215:8080/userManagement/logIn',
                data: {
                    account: this.$store.state.userName,
                    password: this.$store.state.userPassword
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                if (response.data.data) {
                    this.$store.state.permission = response.data.data.permission
                    if (response.data.msg == '登录成功') {
                        this.$nextTick(() => {
                            this.change()
                        })
                        alert(response.data.msg)

                    } else {
                        alert(response.data.msg)
                    }
                }
            })
        },
        change() {
            this.$store.state.logintip = this.$store.state.userName
            router.push(
                {
                    path: '/'
                }
            )
        }
    }
}
</script>

<style scoped>
.form-box {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: transparent;
    backdrop-filter: blur(14px);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    color: #e4e4e4;
}

.form-box.login {
    transform: translateX(0);
    opacity: 1;
    transition: transform 1s ease;
    transition-delay: 0s;
}

.logreg-box.active .form-box.login {
    transform: translateX(100%);
    opacity: 0;
    transition-delay: 0s;
}

.form-box h2 {
    font-size: 32px;
    text-align: center;
}

.form-box .input-box {
    position: relative;
    width: 340px;
    height: 50px;
    border-bottom: 2px solid #e4e4e4;
    margin: 30px 0;
}

.input-box input {
    font-size: 16px;
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    color: #e4e4e4;
    font-weight: 500;
    padding-right: 28px;
}

.input-box label {
    position: absolute;
    font-size: 16px;
    font-weight: 500;
    /* 鼠标点击可以穿透该元素或者说是无视该元素 */
    pointer-events: none;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    transition: .5s ease;
}

.input-box input:focus~label,
.input-box input:valid~label {
    top: -5px;

}

.input-box .icon {
    position: absolute;
    right: 0;
    top: 13px;
    font-size: 19px;
}

.form-box .remember-forget {
    font-size: 14.5px;
    font-weight: 500;
    margin: -15px 0 15px;
    display: flex;
    justify-content: space-between;
}

.remember-forget label input {
    accent-color: #e4e4e4;
    margin-right: 3px;
}

.remember-forget a {
    color: #e4e4e4;
    text-decoration: none;
}

.remember-forget a:hover {
    text-decoration: underline;
}

.btn {
    width: 100%;
    height: 45px;
    background: #67a7d1;
    border: none;
    outline: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    color: #e4e4e4;
    font-weight: 500;
    box-shadow: 0 0 10px rgba(0, 0, 0, .5);
}

.login-register p a {
    color: #e4e4e4;
    font-weight: 600;
    text-decoration: none;
}

.login-register p a:hover {
    text-decoration: underline;
}
</style>