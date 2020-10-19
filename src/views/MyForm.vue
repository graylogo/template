<template>
  <div class="myForm">
    <el-tabs v-model="navSelect" @tab-click="HandleClick" type="border-card">
      <el-tab-pane label="单选" name="first">
        <el-radio v-model="radio" label="选项1" disabled>选项1</el-radio>
        <el-radio v-model="radio" label="选项2">选项2</el-radio>
        <el-radio v-model="radio" label="选项3">选项3</el-radio>
        <br />
        <span>你选择了：{{ radio }}</span>
        <el-divider></el-divider>
        <el-radio-group
          v-model="radioGroup"
          @change="WhenChange"
          text-color="#cccccc"
        >
          <el-radio :label="3" border>3</el-radio>
          <el-radio :label="6">6</el-radio>
          <el-radio :label="9">9</el-radio>
        </el-radio-group>
        <el-divider></el-divider>
        <el-radio-group v-model="radioGroup" @change="WhenChange">
          <el-radio-button :label="3">3</el-radio-button>
          <el-radio-button :label="6">6</el-radio-button>
          <el-radio-button :label="9">9</el-radio-button>
          <el-radio-button :label="12" disabled>12</el-radio-button>
        </el-radio-group>
        <el-divider></el-divider>
      </el-tab-pane>
      <el-tab-pane label="多选" name="second">
        <el-checkbox-group v-model="checkList" @change="CheckBoxVal">
          <el-checkbox label="第一条">给第一条重命名</el-checkbox>
          <el-checkbox label="第二条"></el-checkbox>
          <el-checkbox label="第三条"></el-checkbox>
          <el-checkbox label="禁用" disabled></el-checkbox>
          <el-checkbox label="选中且禁用" disabled></el-checkbox>
        </el-checkbox-group>
        <el-divider></el-divider>
        <el-checkbox-group v-model="checkList" @change="CheckBoxVal">
          <el-checkbox-button label="第一条">给第一条重命名</el-checkbox-button>
          <el-checkbox-button label="第二条"></el-checkbox-button>
          <el-checkbox-button label="第三条"></el-checkbox-button>
          <el-checkbox-button label="禁用" disabled></el-checkbox-button>
          <el-checkbox-button label="选中且禁用" disabled></el-checkbox-button>
        </el-checkbox-group>
      </el-tab-pane>
      <el-tab-pane label="输入框" name="third">
        <el-input
          v-model="inputVal"
          placeholder="请输入"
          @keyup.enter.native="FinishInput"
          size="mini"
          style="width: 400px"
          :disabled="false"
        ></el-input>
        <span>{{ inputVal }}</span>
        <el-divider></el-divider>
        <el-row>
          <el-col :span="5">
            <el-input
              v-model="inputVals"
              placeholder="可清空"
              clearable
            ></el-input>
          </el-col>
          <el-col :span="5" :offset="3">
            <el-input
              v-model="inputVals"
              placeholder="密码框"
              clearable
              show-password
            ></el-input>
          </el-col>
          <el-col :span="5" :offset="3">
            <el-input
              v-model="inputVals"
              placeholder="图标显示"
              suffix-icon="el-icon-date"
            >
              <i slot="suffix" class="el-input__icon el-icon-search"></i>
              <i slot="prefix" class="el-input__icon el-icon-search"></i
            ></el-input>
          </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row :gutter="20">
          <el-col :span="4">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="文本域"
              v-model="textarea"
            ></el-input>
          </el-col>
          <el-col :span="4">
            <el-input
              type="textarea"
              autosize
              placeholder="文本域"
              v-model="textarea"
            ></el-input>
          </el-col>
          <div style="margin: 100px 0"></div>
          <div style="margin-top: 15px;">
            <el-input
              placeholder="请输入内容"
              v-model="input3"
              class="input-with-select"
            >
              <el-select
                v-model="select"
                slot="prepend"
                placeholder="请选择"
                :style="{ width: '140px' }"
              >
                <el-option label="餐厅名" value="1"></el-option>
                <el-option label="订单号" value="2"></el-option>
                <el-option label="用户电话" value="3"></el-option>
              </el-select>
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="算法" name="fore">
        <el-row>
          <el-col :span="5">{{ arr }}</el-col>
          <el-col :span="5"
            ><el-button @click="oneClickSelection">一键</el-button>目标{{
              count
            }}</el-col
          >
          <el-col :span="5">{{ newArr }}</el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="选择器" name="five">
        <el-row>
          <el-col :span="5">
            <el-input-number :step="1" v-model="num"></el-input-number>
          </el-col>
          <el-col :span="5"
            ><el-input-number
              :step="1"
              v-model="num"
              controls-position="right"
              :disabled="num < 0"
            ></el-input-number
          ></el-col>
          <el-col :span="5">
            <el-input-number
              :step="1"
              v-model="num"
              controls-position="right"
              :precision="3"
              :disabled="num < 0"
            ></el-input-number>
          </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row :gutter="10">
          <el-col :span="5">
            <el-select v-model="selectVal" clearable>
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled"
              ></el-option>
            </el-select>
          </el-col>
          <el-col :span="5">
            <el-select v-model="value1" multiple @change="selectChange">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled"
              ></el-option>
            </el-select>
          </el-col>
          <el-col :span="5">
            <el-select v-model="value2">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled"
                >{{ item.value }} {{ item.label }}</el-option
              >
            </el-select>
          </el-col>
          <el-col :span="5">
            选择器
          </el-col>
        </el-row>
        <div class="line"></div>
        <el-row :gutter="100">
          <el-col :span="3">
            <el-switch
              v-model="switchVal"
              active-text="开"
              inactive-text="关"
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-value="100"
              inactive-value="0"
            >
            </el-switch>
          </el-col>
          <el-col :span="3">
            <el-slider v-model="sliderVal" :step="10"> </el-slider>
          </el-col>
          <el-col :span="3">
            <el-time-picker
              v-model="timeVal"
              @change="changeTime"
            ></el-time-picker>
          </el-col>
          <el-col :span="3">
            <el-time-picker
              v-model="timeVal1"
              @change="changeTime"
            ></el-time-picker>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="表单" name="form">
        <el-row :gutter="20">
          <el-col :span="10"
            ><el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              style="width:500px"
            >
              <el-form-item label="活动名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item label="活动区域" prop="region">
                <el-select
                  v-model="ruleForm.region"
                  placeholder="请选择活动区域"
                >
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="活动时间" required>
                <el-col :span="11">
                  <el-form-item prop="date1">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="ruleForm.date1"
                      style="width: 100%;"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                  <el-form-item prop="date2">
                    <el-time-picker
                      placeholder="选择时间"
                      v-model="ruleForm.date2"
                      style="width: 100%;"
                    ></el-time-picker>
                  </el-form-item>
                </el-col>
              </el-form-item>
              <el-form-item label="即时配送" prop="delivery">
                <el-switch v-model="ruleForm.delivery"></el-switch>
              </el-form-item>
              <el-form-item label="活动性质" prop="type">
                <el-checkbox-group v-model="ruleForm.type">
                  <el-checkbox
                    label="美食/餐厅线上活动"
                    name="type"
                  ></el-checkbox>
                  <el-checkbox label="地推活动" name="type"></el-checkbox>
                  <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                  <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="特殊资源" prop="resource">
                <el-radio-group v-model="ruleForm.resource">
                  <el-radio label="线上品牌商赞助"></el-radio>
                  <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="活动形式" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')"
                  >立即创建</el-button
                >
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form></el-col
          >
          <el-col :span="12">
            <span>自定义校验规则：</span>
            <el-form
              :model="formItem"
              inline
              :rules="tableRule"
              ref="formItem"
              status-icon
            >
              <el-form-item label="年龄：" prop="age">
                <el-input v-model.number="formItem.age"></el-input
              ></el-form-item>
              <!-- <el-form-item label="密码："
                ><el-input v-model="formItem.passwd"></el-input
              ></el-form-item> -->
              <el-form-item>
                <el-button type="primary" @click="submitItem">提交</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-button @click="printRef">ref</el-button>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "MyForm",
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          //判断是否为整数
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    return {
      formItem: {
        age: "",
        passwd: ""
      },
      tableRule: { age: [{ validator: checkAge, trigger: "blur" }] },
      timeVal: new Date().getTime,
      timeVal1: new Date(2016, 9, 10, 18, 40),
      sliderVal: 20,
      switchVal: 100,
      radio: "选项1",
      radioGroup: 3,
      navSelect: "form",
      checkList: ["选中且禁用", "第一条"],
      inputVal: "",
      inputVals: "",
      textarea: "",
      arr: [1, 2, 5, 4, 8, 9, 20, 11, 12, 0],
      newArr: [],
      count: 10,
      input3: "",
      select: "",
      selectVal: "",
      num: 0,
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      },
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶",
          disabled: true
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value1: [],
      value2: []
    };
  },
  methods: {
    submitItem() {
      this.$refs.formItem.validate(valid => {
        if (valid) {
          this.$message({
            message: "提交成功",
            type: "success"
          });
        } else {
          return false;
        }
      });
    },
    submitForm(formName) {
      console.log(formName);
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    printRef() {
      console.log(this.$refs);
    },
    changeTime(val) {
      console.log(val);
    },
    selectChange(val) {
      console.log(val);
    },
    oneClickSelection() {
      let arrs = this.arr.sort(function(a, b) {
        return a - b;
      });
      let temp = 0;
      console.log(arrs);
      this.newArr = [];
      for (let i = 0; i <= arrs.length; i++) {
        temp = arrs[i] + temp;
        this.newArr.push(arrs[i]);
        if (temp >= this.count) {
          break;
        }
      }
      this.newArr.pop();
      // let diff = 0;
      // for (const item of arrs) {
      //   if (item >= this.count) {
      //     this.newArr.push(item);
      //     break;
      //   } else {
      //     // break;
      //   }
      // }
    },
    // packageMaxValue(weight, value, size) {
    //   // 省略参数合法性校验
    //   let bagMatrix = [];
    //   for (let w = 0; w <= size; w++) {
    //     // js不能直接创建二维数组，所以在此初始化数组
    //     bagMatrix[w] = [];
    //     for (let j = 0; j < weight.length; j++) {
    //       // 背包的容量为0，那么一个东西也装不下，此时的值肯定也是为0
    //       if (w === 0) {
    //         bagMatrix[w][j] = 0;
    //         continue;
    //       }
    //       // 背包的容量小于物品j的重量，那么就没有上述情况a了
    //       if (w < weight[j]) {
    //         bagMatrix[w][j] = bagMatrix[w][j - 1] || 0;
    //         continue;
    //       }
    //       bagMatrix[w][j] = Math.max(
    //         (bagMatrix[w - weight[j]][j - 1] || 0) + value[j],
    //         bagMatrix[w][j - 1] || 0
    //       );
    //     }
    //   }
    //   return bagMatrix;
    // },
    // select() {
    //   let arr = this.arr.sort(function(a, b) {
    //     return a - b;
    //   });
    //   console.log(arr, "222");
    // },
    WhenChange(val) {
      console.log("事件触发的时候，回调了Label的值：", val);
      this.$message({
        type: "success",
        message: `你选择了${this.radioGroup}`
      });
    },
    HandleClick(nav) {
      console.log(nav);
    },
    CheckBoxVal(val) {
      console.log(val);
    },
    FinishInput() {
      console.log("111");
      if (!this.inputVal) {
        this.$message({
          type: "error",
          message: "请输入有效内容"
        });
      } else {
        this.$message({
          type: "warning",
          message: this.inputVal
        });
      }
    }
  }
};
</script>

<style scoped>
.el-select .el-input {
  width: 330px;
}
</style>
