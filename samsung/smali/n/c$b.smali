.class Ln/c$b;
.super Ljava/lang/Object;
.source "SourceFile"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Ln/c;->d(Ljava/util/concurrent/Callable;Ln/c$d;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic a:Ljava/util/concurrent/Callable;

.field final synthetic b:Landroid/os/Handler;

.field final synthetic c:Ln/c$d;

.field final synthetic d:Ln/c;


# direct methods
.method constructor <init>(Ln/c;Ljava/util/concurrent/Callable;Landroid/os/Handler;Ln/c$d;)V
    .locals 0

    iput-object p1, p0, Ln/c$b;->d:Ln/c;

    iput-object p2, p0, Ln/c$b;->a:Ljava/util/concurrent/Callable;

    iput-object p3, p0, Ln/c$b;->b:Landroid/os/Handler;

    iput-object p4, p0, Ln/c$b;->c:Ln/c$d;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 3

    :try_start_0
    iget-object v0, p0, Ln/c$b;->a:Ljava/util/concurrent/Callable;

    invoke-interface {v0}, Ljava/util/concurrent/Callable;->call()Ljava/lang/Object;

    move-result-object v0
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    const/4 v0, 0x0

    :goto_0
    iget-object v1, p0, Ln/c$b;->b:Landroid/os/Handler;

    new-instance v2, Ln/c$b$a;

    invoke-direct {v2, p0, v0}, Ln/c$b$a;-><init>(Ln/c$b;Ljava/lang/Object;)V

    invoke-virtual {v1, v2}, Landroid/os/Handler;->post(Ljava/lang/Runnable;)Z

    return-void
.end method
