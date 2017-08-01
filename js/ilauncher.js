var versions = new Vue({
    el: "#versions",
    data: {
        versions: [
            {
                name: "Minecraft 1.7.10",
                mcVersion: "1.7.10",
                color: "blue",
                icon: "attachment"
            }
        ]
    }
});

var settings = new Vue({
   el: "#settings",
   data: {
       categories: [
           {
               name: "JVM设置",
               settings: [
                   {
                       name: "memorySize",
                       label: "内存大小(MB)",
                       type: "number"
                   },
                   {
                       name: "permGenSize",
                       label: "PermGen大小(MB)",
                       type: "number"
                   }
               ]
           },
           {
               name: "启动器设置",
               settings: [
                   {
                       name: "proxyMethod",
                       label: "代理方式",
                       type: "radio",
                       options: [
                           {
                               label: "无",
                               value: "none"
                           },
                           {
                               label: "HTTP",
                               value: "http"
                           },
                           {
                               label: "SOCKS 5",
                               value: "socks5"
                           }
                       ]
                   },
                   {
                       name: "proxyHost",
                       label: "代理IP",
                       type: "text"
                   },
                   {
                       name: "proxyPort",
                       label: "代理端口",
                       type: "number"
                   },
                   {
                       name: "test",
                       label: "测试",
                       type: "check",
                       options: [
                           {
                               label: "无",
                               value: "none"
                           },
                           {
                               label: "GG",
                               value: "gg"
                           },
                           {
                               label: "GG1",
                               value: "gg1"
                           }
                       ]
                   }
               ]
           }
       ]
   }
});
