package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.time.LocalDateTime;

@Entity
public class MaterialEntity {

    @Id
    private String id;

    /**
     * 批次号
     */
    private String batchUid;
    /**
     * 物料名称
     */
    private String materialName;
    /**
     * 物料编码
     */
    private String materialCode;

    /**
     * 物料规格
     */
    private String spec;
    /**
     * 物料定价
     */
    private String price;
    /**
     * 物料存量
     */
    private String stock;

    /**
     * 创建时间
     */
    private LocalDateTime createTime;
    /**
     * 更新时间
     */
    private LocalDateTime updateTime;
    /**
     * 创建人
     */
    private String createBy;
    /**
     * 更新人
     */
    private String updateBy;


}
