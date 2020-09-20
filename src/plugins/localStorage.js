export default function (key, value) {
    window.localStorage.getItem("project_manage") || window.localStorage.setItem("project_manage", '{}')
    let project_manage = JSON.parse(window.localStorage.getItem("project_manage"));
    if (value != undefined) {
        project_manage[key] = value;
        window.localStorage.setItem("project_manage", JSON.stringify(project_manage));
    } else {
        if (typeof key == "object" && key.constructor == Object) { //判断是否是对象
            for (let k in key) {
                project_manage[k] = key[k];
            }
            window.localStorage.setItem("project_manage", JSON.stringify(project_manage));
        } else {
            return JSON.parse(window.localStorage.getItem("project_manage"))[key]
        }
    }
    if (window.onunload) {
        localStorage.clear();
    }
}