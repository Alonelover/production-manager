package com.example.demo.production;


import java.util.List;

/**
 * 物料领域：物料聚合根
 */
public class Material {
    private String batchId;
    private String materialCode;
    private String materialName;
    private String materialSpec;
    private List<MaterialElement> elements;

}
