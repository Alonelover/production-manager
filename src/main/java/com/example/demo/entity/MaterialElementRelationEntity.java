package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.time.LocalDateTime;

/**
 * 物料元素关系表
 */
@Entity
public class MaterialElementRelationEntity {
    @Id
    private String id;
    /**
     * 物料编码
     */
    private String materialCode;
    /**
     * 物料的批次
     */
    private String batchId;
    /**
     * 元素编码
     */
    private String elementCode;
    /**
     * 元素含量
     */
    private String content;
    /**
     * 创建时间
     */
    private LocalDateTime createTime;
    /**
     * 更新时间
     */
    private LocalDateTime updateTime;
}
