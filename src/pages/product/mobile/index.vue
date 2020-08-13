<template>
    <div class="page-product-mobile">
        <header-mobile></header-mobile>

        <div class="banner">
            <h3>提升、内容和技术创新</h3>
            <p>提供边缘云主机、边缘云容器、边缘云网络等基础服务。</p>
        </div>

        <!-- 视频直播边缘计算  -->
        <div class="live" id="live">
            <h2>视频直播边缘计算</h2>

            <div class="item bline">
                <img src="../../../assets/images/live-1.png" />
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
            <div class="item bline">
                <img src="../../../assets/images/live-2.png" />
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
            <div class="item bline">
                <img src="../../../assets/images/live-3.png" />
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
            <div class="item bline">
                <img src="../../../assets/images/live-5.png" />
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
            <div class="item bline">
                <img src="../../../assets/images/live-4.png" />
                <h3>弹幕分发</h3>
                <div class="desc">
                    <p>
                        在边缘计算节点部署弹幕模块，实现就近弹幕分发
                    </p>
                </div>
            </div>
            <div class="item bline">
                <img src="../../../assets/images/live-6.png" />
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

        <!-- sd -->
        <div class="sd" id="sdWan">
            <h2>SD-WAN_E-connect</h2>
            <ul>
                <li class="bline">
                    <div class="icon">
                        <img src="../../../assets/images/sd-1.png" />
                    </div>
                    <div class="desc">
                        <h3>产品多形态，设备零接触部署</h3>
                        <p>多形态&多型号 ,丰富产品选择，满足多场景需求</p>
                    </div>
                </li>
                <li class="bline">
                    <div class="icon">
                        <img src="../../../assets/images/sd-2.png" />
                    </div>
                    <div class="desc">
                        <h3>可视化管理平台</h3>
                        <p>主页随心定义</p>
                    </div>
                </li>
                <li class="bline">
                    <div class="icon">
                        <img src="../../../assets/images/sd-3.png" />
                    </div>
                    <div class="desc">
                        <h3>智能加速平台，提供极致体验</h3>
                        <p>通过对各POP点路由的智能探测及私有协议传输优化与即时访问效果，实时掌握网络变化状况，结合人工智能算法计算最快访问路径，避开拥塞线路，链路出现质量恶化或中断时，智能切换，提升访问速度，降低传输时间。</p>
                    </div>
                </li>
                <li class="bline">
                    <div class="icon">
                        <img src="../../../assets/images/sd-4.png" />
                    </div>
                    <div class="desc">
                        <h3>全面保障，网络高可用高稳定</h3>
                        <p>CPE-双机热备、CPE-POP-多方式接入，故障自动切换就近接入多个POP点，实现POP点主备保护、POP-节点交换机冗余机制、POP-POP-主备路由</p>
                    </div>
                </li>
                <li class="bline">
                    <div class="icon">
                        <img src="../../../assets/images/sd-5.png" />
                    </div>
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

         <!-- 安防 -->
        <div class="safe" id="safe">
            <h2>安防维稳产品</h2>
            <div class="item bline">
                <div class="icon">
                    <img src="../../../assets/images/safe-1.svg" />
                </div>
                <div class="info">
                    <h3>卡口安全管控系统</h3>
                    <p>要道出口布控，安装访客机，人脸识别，车辆抓拍，对人员和车辆全面防控</p>
                </div>
            </div>
            <div class="item bline">
                <div class="icon">
                    <img src="../../../assets/images/safe-2.svg" />
                </div>
                <div class="info">
                    <h3>出租房管理系统</h3>
                    <p>二维码门牌，影像采集，智能门锁，大数据分析，构建出租房智能安防系统</p>
                </div>
            </div>
            <div class="item bline">
                <div class="icon">
                    <img src="../../../assets/images/safe-3.svg" />
                </div>
                <div class="info">
                    <h3>公共安防监控</h3>
                    <p>社区360度无死角监控，支持人脸比对，异常人员报警，实现异常情况解析</p>
                </div>
            </div>
            <div class="item bline">
                <div class="icon">
                    <img src="../../../assets/images/safe-4.svg" />
                </div>
                <div class="info">
                    <h3>公共停车数据采集</h3>
                    <p>采集停车场进出口数据，智能安防，重点车辆排查，精细化的管理，涉案车辆分析。</p>
                </div>
            </div>
            <div class="item bline">
                <div class="icon">
                    <img src="../../../assets/images/safe-5.svg" />
                </div>
                <div class="info">
                    <h3>一键报警</h3>
                    <p>突发情况下一键报警。同一联防组内的一键报警终端同时发出警笛声并通知公安机关</p>
                </div>
            </div>
            <div class="item bline">
                <div class="icon">
                    <img src="../../../assets/images/safe-6.svg" />
                </div>
                <div class="info">
                    <h3>周围周界雷达报警</h3>
                    <p>集想控阵警戒雷达，光电探测，目标智能识别。实时监测，精确引导定位，多方位协同处理</p>
                </div>
            </div>
            <div class="item bline">
                <div class="icon">
                    <img src="../../../assets/images/safe-7.svg" />
                </div>
                <div class="info">
                    <h3>公安4G执法记录仪</h3>
                    <p>高清视频芯片，GPS芯片，高清摄像头，4G模组，红外夜视，显示屏幕，存储，电池</p>
                </div>
            </div>
            <div class="item bline">
                <div class="icon">
                    <img src="../../../assets/images/safe-8.svg" />
                </div>
                <div class="info">
                    <h3>安全态势感知平台</h3>
                    <p>基于运营大数据，利用异常行为检测，研究网络安全态势感知整体方案</p>
                </div>
            </div>
        </div>

        <div class="footer">
            <p>上海崆苍网络版权所有 (c)  | 沪ICP备15040436号-8</p>
        </div>
    </div>
</template>