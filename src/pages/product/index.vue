<template>
    <div class="page-product">
        <!-- 头部 -->
        <header-pc></header-pc>

        <div class="banner">
            <div class="text">
                <h3>更加关注用户体验提升、内容和技术创新</h3>
                <p>基于崆苍全球节点，通过虚拟化技术将边缘节点的计算能力进一步开放，并借助高速网络保障连通性，提供边缘云主机、边缘云容器、边缘云网络等基础服务。</p>
            </div>
        </div>

        <!-- 视频直播边缘计算  -->
        <div class="live wow fadeIn" id="live">
            <h2>视频直播边缘计算</h2>
            <div class="gird">
                <div class="col-md-4 item">
                    <img src="../../assets/images/live-1.png" />
                    <h3>私有协议推拉流</h3>
                    <div class="desc">
                        <p>
                            1.在离主播就近的边缘计算节点，部署私有协议应用模块，实现私有协议推流；再通过协议转换，使用通用协议走第三方CDN完成分发。
                        </p>
                        <p>
                            2.在边缘计算节点部署推流、拉流模块，实现直播全过程私有协议优化。
                        </p>
                    </div>
                </div>
                <div class="col-md-4 item">
                    <img src="../../assets/images/live-2.png" />
                    <h3>直播转码</h3>
                    <div class="desc">
                        <p>
                            1.客户把自己的转码模块，部署在离用户就近的边缘计算节点，保障转码流质量一致。
                        </p>
                        <p>
                            2.码流后，可直接调度到网宿同机房的CDN推流节点进行分发。
                        </p>
                    </div>
                </div>
                <div class="col-md-4 item">
                    <img src="../../assets/images/live-3.png" />
                    <h3>连麦混流</h3>
                    <div class="desc">
                        <p>
                            1.主播和连麦粉丝通过就近的边缘计算节点接入，优化第一公里的网络效果。
                        </p>
                        <p>
                            2.通过多线节点解决国内跨运营商网络质量差问题，保障低延时交互体验。
                        </p>
                    </div>
                </div>
                <div class="col-md-4 item">
                    <img src="../../assets/images/live-5.png" />
                    <h3>P2P切片与分发</h3>
                    <div class="desc">
                        <p>
                            1.客户在边缘计算节点部署切片模块，主播就近接入边缘计算节点（主/备），进行切片；
                        </p>
                        <p>
                            2.在各地部署P2P分发节点，进行快速补片，保障用户视频直播观看体验。
                        </p>
                    </div>
                </div>
                <div class="col-md-4 item">
                    <img src="../../assets/images/live-4.png" />
                    <h3>弹幕分发</h3>
                    <div class="desc">
                        <p>
                            在边缘计算节点部署弹幕模块，实现就近弹幕分发
                        </p>
                    </div>
                </div>
                <div class="col-md-4 item">
                    <img src="../../assets/images/live-6.png" />
                    <h3>拨测监控</h3>
                    <div class="desc">
                        <p>
                            1.在各个城市的边缘计算节点部署客户自定义的监控模块，实现服务质量的监控。
                        </p>
                        <p>
                            2.边缘计算节点将监控结果实时上报至管理中心，进行统一汇总分析和异常告警。
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- sd -->
        <div class="sd" id="sdWan">
            <div class="gird">
                <h2>SD-WAN_E-connect</h2>
                <ul>
                    <li class="wow fadeInDown">
                        <img src="../../assets/images/sd-1.png" />
                        <div class="desc">
                            <h3>产品多形态，设备零接触部署</h3>
                            <p>多形态&多型号 ,丰富产品选择，满足多场景需求</p>
                        </div>
                    </li>
                    <li class="wow fadeInDown">
                        <img src="../../assets/images/sd-2.png" />
                        <div class="desc">
                            <h3>可视化管理平台</h3>
                            <p>主页随心定义</p>
                        </div>
                    </li>
                    <li class="wow fadeInDown">
                        <img src="../../assets/images/sd-3.png" />
                        <div class="desc">
                            <h3>智能加速平台，提供极致体验</h3>
                            <p>通过对各POP点路由的智能探测及私有协议传输优化与即时访问效果，实时掌握网络变化状况，结合人工智能算法计算最快访问路径，避开拥塞线路，链路出现质量恶化或中断时，智能切换，提升访问速度，降低传输时间。</p>
                        </div>
                    </li>
                    <li class="wow fadeInDown">
                        <img src="../../assets/images/sd-4.png" />
                        <div class="desc">
                            <h3>全面保障，网络高可用高稳定</h3>
                            <p>CPE-双机热备、CPE-POP-多方式接入，故障自动切换就近接入多个POP点，实现POP点主备保护、POP-节点交换机冗余机制、POP-POP-主备路由</p>
                        </div>
                    </li>
                    <li class="wow fadeInDown">
                        <img src="../../assets/images/sd-5.png" />
                        <div class="desc">
                            <h3>多重技术，链路/流量智能管控</h3>
                            <p>
                                DPI可基于五元组、应用、域名等类型，主动对流量报文特征分析，归纳特征规则库
                            </p>
                            <p>
                                QoS对关键业务流量高优先级保障，线上平台统一设置流量优先级、保障带宽等具体细项
                            </p>
                            <p>
                                单一线路/多条线路，崆苍线上管理平台可根据多应用流量的优先级作出相应策略
                            </p>
                            <p>
                                平台自动化监控调整线路流量，负载均衡实现各线路均有流量在跑且利用率相近。主备切换实现当某条线路故障，相关流量可自动切换至其余线路
                                管理平台上可对相关功能统一配置，免去各分支在流量分析、线路设置上花费的人力时间成本
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <!-- 安防 -->
        <div class="safe" id="safe">
            <h2>安防维稳产品</h2>
            <div class="gird">
                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>