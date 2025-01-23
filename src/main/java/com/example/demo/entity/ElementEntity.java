package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.time.LocalDateTime;

/**
 * 元素定义实体
 */
@Entity
public class ElementEntity {

    @Id
    private String id;
    private String elementId;
    private String elementCode;
    private String elementName;
    private String elementSymbol;
    private LocalDateTime createTime;
    private LocalDateTime updateTime;
}
