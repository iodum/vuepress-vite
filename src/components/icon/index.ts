import Icon from "./Icon.vue";

const Plugin = {
    install: (instance : any) => {
        instance.component(Icon.name, Icon)
    }
};

export default Plugin;

export { Icon };

