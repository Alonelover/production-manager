package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.time.LocalDateTime;

/**
 * 物料配置信息表
 */
@Entity
public class ConfigInfoEntity {
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
