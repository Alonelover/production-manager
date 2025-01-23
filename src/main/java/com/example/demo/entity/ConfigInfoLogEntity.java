package com.example.demo.entity;

import jakarta.persistence.Id;

import java.time.LocalDateTime;

public class ConfigInfoLogEntity {
    @Id
    private String id;
    /**
     * 物料配置信息的编码：日期+时间戳
     */
    private Long code;
    /**
     * 物料配置信息的版本
     */
    private Long version;

    /**
     * 配置明细
     */
    private String content;
    /**
     * 创建人
     */
    private String createBy;
    /**
     * 更新人
     */
    private String updateBy;
    /**
     * 创建时间
     */
    private LocalDateTime createTime;
    /**
     * 更新时间
     */
    private LocalDateTime updateTime;
}
